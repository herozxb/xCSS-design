

import React from "react";
import ReactDOM from "react-dom";
import SortableTree, {
  toggleExpandedForAll,
  addNodeUnderParent,
  removeNodeAtPath
} from "@nosferatu500/react-sortable-tree";


import "@nosferatu500/react-sortable-tree/style.css";

import treeData from "./treeData"
import "./styles.css";

const maxDepth = 5;

const alertNodeInfo = ({ node, path, treeIndex }) => {
  const objectString = Object.keys(node)
    .map((k) => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
    .join(",\n   ");

  global.alert(
    "Info passed to the button generator:\n\n" +
      `node: {\n   ${objectString}\n},\n` +
      `path: [${path.join(", ")}],\n` +
      `treeIndex: ${treeIndex}`
  );
};



class Tree extends React.Component {
  state = {
    searchString: "",
    searchFocusIndex: -1,
    searchFoundCount: 0,
    treeData
  };

  handleTreeOnChange = (treeData) => {
    this.setState({ treeData });
  };

  handleSearchOnChange = (e) => {
    this.setState({
      searchString: e.target.value
    });
  };

  selectPrevMatch = () => {
    const { searchFocusIndex, searchFoundCount } = this.state;

    this.setState({
      searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1
    });
  };

  selectNextMatch = () => {
    const { searchFocusIndex, searchFoundCount } = this.state;

    this.setState({
      searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0
    });
  };

  toggleNodeExpansion = (expanded) => {
    this.setState((prevState) => ({
      treeData: toggleExpandedForAll({
        treeData: prevState.treeData,
        expanded
      })
    }));
  };

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount
    } = this.state;

    return (
      <div className="wrapper_tree">
        <div className="bar_wrapper_tree">

          <button onClick={this.toggleNodeExpansion.bind(this, true)}>
            Expand all
          </button>

          <button
            className="collapse_tree"
            onClick={this.toggleNodeExpansion.bind(this, false)}
          >
            Collapse all
          </button>

          <label>Search: </label>

          <input onChange={this.handleSearchOnChange} />

          <button className="previous_tree" onClick={this.selectPrevMatch}>
            Previous
          </button>

          <button className="next_tree" onClick={this.selectNextMatch}>
            Next
          </button>

          <label>
            {searchFocusIndex} / {searchFoundCount}
          </label>

        </div>
        
        <div className="tree_wrapper_tree">
          <SortableTree
            treeData={treeData}
            onChange={this.handleTreeOnChange}
            onMoveNode={({ node, treeIndex, path }) =>
              global.console.debug(
                "node:",
                node,
                "treeIndex:",
                treeIndex,
                "path:",
                path
              )
            }
            maxDepth={maxDepth}
            onlyExpandSearchedNodes={true}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            canDrag={({ node }) => !node.noDragging}
            canDrop={({ nextParent }) => !nextParent || !nextParent.noChildren}
            searchFinishCallback={(matches) =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0
              })
            }
            isVirtualized={true}
            generateNodeProps={(rowinfo) => ({
              buttons: [
                <button
                  className="btn btn-outline-success"
                  style={{
                    width : 20,
                    margin : 2,
                    verticalAlign: "middle"
                  }}
                  onClick={() => alertNodeInfo(rowinfo)}
                >
                  ℹ
                </button>,
                <button
                  style={{
                    width : 20,
                    margin : 2,
                    verticalAlign: "middle"
                  }}
                  onClick={() =>
                    this.setState((state) => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: rowinfo.path[rowinfo.path.length - 1],
                        expandParent: true,
                        getNodeKey,
                        newNode: {
                          title: `new title`,
                          subtitle: "new subtitle"
                        },
                        addAsFirstChild: state.addAsFirstChild
                      }).treeData
                    }))
                  }
                >
                  +
                </button>,
                <button
                  style={{
                    width : 20,
                    margin : 2,
                    verticalAlign: "middle"
                  }}
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete this node?`
                      )
                    ) {
                      this.setState((state) => ({
                        treeData: removeNodeAtPath({
                          treeData: state.treeData,
                          path: rowinfo.path,
                          getNodeKey
                        })
                      }));
                    }
                  }}
                >
                  -
                </button>
              ]
            })}
          />
        </div>
      </div>
    );
  }
}

export default Tree;