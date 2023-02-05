import React from "react";
import "./styles.css";

import Backend from "react-dnd-html5-backend";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { Tree, Classes } from "@blueprintjs/core";

export default function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <h1>Drag and Drop Tree Example</h1>

        <Tree contents={INITIAL_STATE} className={Classes.ELEVATION_0} />
      </DndProvider>
    </div>
  );
}

function DraggableItem() {
  const [collectedProps, drag] = useDrag({
    item: { id: 1, type: "DRAGGABLE_ITEM" }
  });

  return <div ref={drag}>I am draggable </div>;
}

function DroppableItem(props) {
  const [collectedProps, drop] = useDrop({
    accept: "DRAGGABLE_ITEM",
    drop: (item, monitor) => {
      console.log(item);
    }
  });

  return <div ref={drop}>Drop me here!</div>;
}

const INITIAL_STATE = [
  {
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: <DraggableItem />
  },
  {
    id: 2,
    hasCaret: true,
    icon: "folder-close",
    label: <DroppableItem />,
    disabled: true
  }
];


const HtmlNode = (tagName, attributes = [], children = []) => {
  const e = document.createElement(tagName)
  for (const [k, v] of attributes) e.setAttribute(k, v)
  for (const child of children) e.appendChild(toNode(child))
  return e
}

const TextNode = (text) => {
  return document.createTextNode(text)
}
  
const toNode = t => {
  switch (t?.type) {
    case "Elem": return HtmlNode(t.tagName, t.attributes, t.children)
    case "TextElem": return TextNode(t.textContent)
    default: throw Error("unsupported type: " + t.type)
  }
}

const json2html = json =>
  toNode(JSON.parse(json))

const parsedJson =
  {"type":"Elem","tagName":"MAIN","attributes":[],"children":[{"type":"TextElem","textContent":"\n  "},{"type":"Elem","tagName":"H1","attributes":[["class","mainHeading"]],"children":[{"type":"TextElem","textContent":"Some heading"}]},{"type":"TextElem","textContent":"\n  "},{"type":"Elem","tagName":"UL","attributes":[["id","menu"]],"children":[{"type":"TextElem","textContent":"\n    "},{"type":"Elem","tagName":"LI","attributes":[],"children":[{"type":"Elem","tagName":"A","attributes":[["href","/a"]],"children":[{"type":"TextElem","textContent":"a"}]}]},{"type":"TextElem","textContent":"\n    "},{"type":"Elem","tagName":"LI","attributes":[],"children":[{"type":"Elem","tagName":"A","attributes":[["href","/b"]],"children":[{"type":"TextElem","textContent":"b"}]}]},{"type":"TextElem","textContent":"\n    "},{"type":"Elem","tagName":"LI","attributes":[],"children":[{"type":"Elem","tagName":"A","attributes":[["href","/c"]],"children":[{"type":"TextElem","textContent":"c"}]}]},{"type":"TextElem","textContent":"\n  "}]},{"type":"TextElem","textContent":"\n  "},{"type":"Elem","tagName":"P","attributes":[],"children":[{"type":"TextElem","textContent":"some text"}]},{"type":"TextElem","textContent":"\n"}]}

document.body.appendChild(toNode(parsedJson))





  const Elem = e => ({
    tagName: 
      typeof e.tagName == 'undefined' ? e.tagName : 'None',
    textContent:
      typeof e.textContent == 'undefined' ? e.textContent : 'None',
    attributes:
      typeof e.attributes == 'undefined' ? Array.from(e.attributes, ({name, value}) => [name, value]) : 'None',
    children:
      typeof e.children == 'undefined' ? Array.from(e.children, Elem) : 'None', 
  })

  const html2json = e => JSON.stringify(Elem(e), null, '  ')

    console.log(html2json(MyDiv1.innerHTML))









function converter(dom) {
    if (dom.nodeType === Node.TEXT_NODE) {
        return dom.nodeValue;
    }
    if (dom.nodeType === Node.DOCUMENT_NODE) {
        dom = dom.documentElement;
    }
    const obj = {};
    obj.nodeType = dom.nodeType;
    if (dom.nodeType === Node.ELEMENT_NODE) {
        obj.tagName = dom.tagName;
        obj.attributes = []; // Array.from(obj.attributes) gives us a lot of things we don't want
        for (let i = 0, len = dom.attributes.length; i < len; ++i) {
            const attr = dom.attributes[i];
            obj.attributes.push({name: attr.name, value: attr.value});
        }
        obj.children = [];
        for (let child = dom.firstChild; child; child = child.nextSibling) {
            obj.children.push(converter(child));
        }
    } else {
        obj.nodeValue = dom.nodeValue;
    }
    return obj;
}
const json = JSON.stringify(converter(document.getElementById("example")), null, 4);
console.log(json);



  const treeData = [
      {
          id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
          childNodes: [
              {
                  id: 11,
                  icon: "folder-open",
                  label: "Documents"
              },
              {
                  id: 12,
                  icon: "folder-open",
                  label: "Videos"
              },
              {
                  id: 13,
                  icon: "folder-open",
                  label: "Pictures"
              },
              {
                  id: 14,
                  hasCaret: true,
                  isExpanded: isFolderOpen,
                  icon: "folder-open",
                  label: "Music",
                  childNodes: [
                      {
                          id: 15,
                          icon: "folder-open",
                          label: "Documents"
                      },
                      {
                          id: 16,
                          icon: "folder-open",
                          label: "Videos"
                      },
                      {
                          id: 17,
                          icon: "folder-open",
                          label: "Pictures"
                      },
                      {
                          id: 18,
                          icon: "folder-open",
                          label: "Music",
                          

                      }
                  ]


              }
          ]
      }
  ];





{
            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
    "nodeType": 1,
    "tagName": "DIV",
    "attributes": [
        {
            "name": "class",
            "value": "canvas-panel"
        }
    ],
    childNodes: [
        {
                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(90deg, rgb(173, 83, 137) 0%, rgb(60, 16, 83) 100%); width: 500px; height: 500px; top: 344px; left: 1158px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: none; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            childNodes: [
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 1,
                    "tagName": "DIV",
                    "attributes": [
                        {
                            "name": "class",
                            "value": "selected-element-cursor"
                        }
                    ],
                    childNodes: []
                }
            ]
        },
        {
                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(30deg, rgb(233, 235, 238) 0%, rgb(6, 172, 240) 100%); width: 200px; height: 200px; top: 348px; left: 811px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: grey 5px 5px 20px 0px; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            childNodes: []
        },
        {
                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(90deg, rgb(255, 165, 0) 0%, rgb(135, 206, 235) 100%); width: 200px; height: 200px; top: 564px; left: 994px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: grey 5px 5px 20px 0px inset; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            childNodes: []
        },
        {
                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "footer"
                }
            ],
            childNodes: [
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": "Created by "
                },
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 1,
                    "tagName": "A",
                    "attributes": [
                        {
                            "name": "href",
                            "value": "https://twitter.com/li_guangyi"
                        },
                        {
                            "name": "target",
                            "value": "_blank"
                        }
                    ],
                    childNodes: [
                        {
                                      id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Guangyi Li"
                        }
                    ]
                },
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": " / "
                },
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 1,
                    "tagName": "A",
                    "attributes": [
                        {
                            "name": "href",
                            "value": "mailto:liguangyi08@gmail.com"
                        }
                    ],
                    childNodes: [
                        {
                                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Email Me"
                        }
                    ]
                },
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": "  / "
                },
                {
                            id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                    "nodeType": 1,
                    "tagName": "A",
                    "attributes": [
                        {
                            "name": "href",
                            "value": "https://github.com/hh54188/cssgui"
                        },
                        {
                            "name": "target",
                            "value": "_blank"
                        }
                    ],
                    childNodes: [
                        {
                                    id: 1,
          hasCaret: true,
          isExpanded: isFolderOpen,
          icon: "folder-close",
          label: "Folders",
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Source Code"
                        }
                    ]
                }
            ]
        }
    ]
} 



import React from "react";
import ReactDOM from "react-dom";
import SortableTree, {
  toggleExpandedForAll,
  addNodeUnderParent,
  removeNodeAtPath
} from "@nosferatu500/react-sortable-tree";


import "./styles.css";
import "@nosferatu500/react-sortable-tree/style.css";

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


const maxDepth = 5;

const renderDepthTitle = ({ path }) => `Depth: ${path.length}`;

const treeData = [
  {
    title: "Stuffs",
    subtitle: "`subtitle`",
    children: [
      {
        title: "Child Node",
        subtitle: "Defined in `children` array belonging to parent"
      },
      {
        title: "Nested structure is rendered virtually",
        subtitle: (
          <span>
            The tree uses&nbsp;
            <a href="https://github.com/bvaughn/react-virtualized">
              react-virtualized
            </a>
            &nbsp;and the relationship lines are more of a visual trick.
          </span>
        )
      }
    ]
  },
  {
    expanded: true,
    title: "Any node can be the parent or child of any other node",
    children: [
      {
        expanded: true,
        title: "Chicken",
        children: [{ title: "Egg" }]
      }
    ]
  },
  {
    title: "Button(s) can be added to the node",
    subtitle:
      "Node info is passed when generating so you can use it in your onClick handler"
  },
  {
    title: "Show node children by setting `expanded`",
    subtitle: ({ node }) => `expanded: ${node.expanded ? "true" : "false"}`,
    children: [
      {
        title: "Bruce",
        subtitle: ({ node }) => `expanded: ${node.expanded ? "true" : "false"}`,
        children: [{ title: "Bruce Jr." }, { title: "Brucette" }]
      }
    ]
  },
  {
    title: "Advanced",
    subtitle: "Settings, behavior, etc.",
    children: [
      {
        title: (
          <div>
            <div
              style={{
                backgroundColor: "gray",
                display: "inline-block",
                borderRadius: 10,
                color: "#FFF",
                padding: "0 5px"
              }}
            >
              Any Component
            </div>
            &nbsp;can be used for `title`
          </div>
        )
      },
      {
        expanded: true,
        title: "Limit nesting with `maxDepth`",
        subtitle: `It's set to ${maxDepth} for this example`,
        children: [
          {
            expanded: true,
            title: renderDepthTitle,
            children: [
              {
                expanded: true,
                title: renderDepthTitle,
                children: [
                  { title: renderDepthTitle },
                  {
                    title: ({ path }) =>
                      path.length >= maxDepth
                        ? "This cannot be dragged deeper"
                        : "This can be dragged deeper"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Disable dragging on a per-node basis with the `canDrag` prop",
        subtitle: "Or set it to false to disable all dragging.",
        noDragging: true
      },
      {
        title: "You cannot give this children",
        subtitle:
          "Dropping is prevented via the `canDrop` API using `nextParent`",
        noChildren: true
      },
      {
        title:
          "When node contents are really long, it will cause a horizontal scrollbar" +
          " to appear. Deeply nested elements will also trigger the scrollbar."
      }
    ]
  }
];

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
      <div className="wrapper">
        <div className="bar-wrapper">
          <button onClick={this.toggleNodeExpansion.bind(this, true)}>
            Expand all
          </button>
          <button
            className="collapse"
            onClick={this.toggleNodeExpansion.bind(this, false)}
          >
            Collapse all
          </button>
          <label>Search: </label>
          <input onChange={this.handleSearchOnChange} />
          <button className="previous" onClick={this.selectPrevMatch}>
            Previous
          </button>
          <button className="next" onClick={this.selectNextMatch}>
            Next
          </button>
          <label>
            {searchFocusIndex} / {searchFoundCount}
          </label>
        </div>
        <div className="tree-wrapper">
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
                    verticalAlign: "middle"
                  }}
                  onClick={() => alertNodeInfo(rowinfo)}
                >
                  ℹ
                </button>,
                <button
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
