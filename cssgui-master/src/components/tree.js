

import React from "react";
import ReactDOM from "react-dom";
import SortableTree, {
  toggleExpandedForAll,
  addNodeUnderParent,
  removeNodeAtPath
} from "@nosferatu500/react-sortable-tree";


import "@nosferatu500/react-sortable-tree/style.css";

//import treeData from "./treeData"
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







  var json_data = {
    "nodeType": 1,
    "tagName": "DIV",
    "attributes": [
        {
            "name": "class",
            "value": "canvas-panel"
        }
    ],
    "children": [
        {
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(90deg, rgb(173, 83, 137) 0%, rgb(60, 16, 83) 100%); width: 500px; height: 500px; top: 246px; left: 1114px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: none; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            "children": []
        },
        {
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(30deg, rgb(233, 235, 238) 0%, rgb(6, 172, 240) 100%); width: 200px; height: 200px; top: 267px; left: 835px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: grey 5px 5px 20px 0px; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            "children": []
        },
        {
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "canvas-item"
                },
                {
                    "name": "style",
                    "value": "background: linear-gradient(90deg, rgb(255, 165, 0) 0%, rgb(135, 206, 235) 100%); width: 200px; height: 200px; top: 498px; left: 996px; position: absolute; border-color: gray; border-style: solid; border-width: 1px; box-shadow: grey 5px 5px 20px 0px inset; display: flex; justify-content: center; align-items: center; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg); animation-duration: 0.3s; animation-delay: 0s; animation-timing-function: ease; animation-iteration-count: infinite; z-index: 2;"
                }
            ],
            "children": [
                {
                    "nodeType": 1,
                    "tagName": "DIV",
                    "attributes": [
                        {
                            "name": "class",
                            "value": "selected-element-cursor"
                        }
                    ],
                    "children": []
                }
            ]
        },
        {
            "nodeType": 1,
            "tagName": "DIV",
            "attributes": [
                {
                    "name": "class",
                    "value": "footer"
                }
            ],
            "children": [
                {
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": "Created by "
                },
                {
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
                    "children": [
                        {
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Guangyi Li"
                        }
                    ]
                },
                {
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": " / "
                },
                {
                    "nodeType": 1,
                    "tagName": "A",
                    "attributes": [
                        {
                            "name": "href",
                            "value": "mailto:liguangyi08@gmail.com"
                        }
                    ],
                    "children": [
                        {
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Email Me"
                        }
                    ]
                },
                {
                    "nodeType": 3,
                    "tagName": "a",
                    "textContent": "  / "
                },
                {
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
                    "children": [
                        {
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








var id = 0

function mapDataToTreeData(data) {

    var node = {}

    for (let key in data) 
    {
      var value = data[key];

      if (key ==="nodeType") {
        node.nodeType = 1
        node.title = "DIV"

      }

      if (key ==="tagName") {
        node.tagName = value
      }

      if (key ==="attributes") {
        node.attributes = value
        node.subtitle = value[0]["name"] + ":" + value[0]["value"] 
      }

      if (key ==="textContent") {

        node.nodeType = 3
        node.title = "TEXT"
        node.subtitle = value
        node.textContent = value

        return node

      }

      

      if (key ==="children") {
        var treeData = [];

        if (typeof value === "object") {
          var children = []

          for (let i = 0; i < value.length; i++) {
            children.push(mapDataToTreeData(value[i]));
          }

          node.children = children

          if (value.length==0) {

          }
          
          
        } else {

          node.children = [];
          
        }


        return node


      }
   
    }
    
  }



function treeDataToJson(data) {

    var node = {}

    for (let key in data) 
    {
      ////console.log("=============key===========")
      ////console.log(key)
      var value = data[key];
      ////console.log(value)


      if (key ==="nodeType") {
        node.nodeType = value
        ////console.log("======nodeType======")
        ////console.log(value)
      }

      if (key ==="tagName") {
        node.tagName = value
        ////console.log("======tagName======")
        ////console.log(value)
      }

      if (key ==="attributes") {
        node.attributes = value
        ////console.log("======attributes======")
        ////console.log(value)
      }

      if (key ==="textContent") {

        node.nodeType = 3
        node.textContent = value

        ////console.log("======textContent======")
        ////console.log(value)
        
        ////console.log("==========children_node==========")
        ////console.log(node)
        return node

      }

      
      

      if (key ==="children") {
        var treeData = [];

        if (typeof value === "object") {
          var children = []
          ////console.log("==========children_1==========")
          ////console.log(value)

          for (let i = 0; i < value.length; i++) {
            children.push(treeDataToJson(value[i]));
          }

          node.children = children
          ////console.log("==========children_2===========")
          ////console.log(children)

          if (value.length==0) {

          }
          
          
        } else {

          node.children = [];
          
        }


        ////console.log("==========children_node==========")
        ////console.log(node)
        return node


      }
      //*/
   
    }
    
  }




  function converter(dom) {

      const obj = {};
      if (dom.nodeType === Node.TEXT_NODE) {
          obj.nodeType = 3
          obj.tagName = "a"
          obj.textContent = dom.nodeValue;
          return obj;
      }
      if (dom.nodeType === Node.DOCUMENT_NODE) {
          //////console.log("document")
          dom = dom.documentElement;
      }

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
          obj.nodeType = 3
          obj.tagName = "a"
          obj.textContent = dom.nodeValue;
      }
      return obj;
  }


function converter_worked(dom) {


    //console.log("===========converter===========");
    //console.log(dom)
    const obj = {};
    if (dom.nodeType === Node.TEXT_NODE) {
        obj.nodeType = 3
        obj.tagName = "a"
        obj.textContent = dom.textContent;
        //console.log("=========TEXT_NODE========")
        //console.log(obj)
        return obj;
    }


    obj.nodeType = dom.nodeType;
    if (dom.nodeType === Node.ELEMENT_NODE) {

        //console.log("=========ELEMENT_NODE========")
        //console.log(dom.nodeType)

        obj.tagName = dom.tagName;
        obj.attributes = []; // Array.from(obj.attributes) gives us a lot of things we don't want

        for (let i = 0, len = dom.attributes.length; i < len; ++i) {
            const attr = dom.attributes[i];
            obj.attributes.push({name: attr.name, value: attr.value});
        }

        obj.children = [];

        if ( dom.tagName == "A" ) 
        { 
          //console.log("=========A========")
          obj.children = dom.children; 
          return obj 
        }


        for (let i = 0; i < dom.children.length; ++i)  {
            //console.log("=========for===========")
            //console.log(dom.children[i])
            obj.children.push(converter_worked(dom.children[i]));
        }
        
        //console.log("===========after============")
        //console.log(obj)
        return obj;
    } 

    
}
//*/

const HtmlNode = (tagName, attributes = [], children = []) => {
  const e = document.createElement(tagName)
  for (const attribute of attributes) { e.setAttribute(attribute.name, attribute.value); }
  for (const child of children) e.appendChild(toNode(child))
  return e
}

const TextNode = (text) => {
  return document.createTextNode(text)
}
  
const toNode = t => {
  switch (t?.nodeType) {
    case 1: return HtmlNode(t.tagName, t.attributes, t.children)
    case 3: return TextNode(t.textContent)
  }
}

const json2html = json => toNode(JSON.parse(json))





var data = JSON.parse( JSON.stringify( json_data ) );
var treeData = [mapDataToTreeData(data)];  
//var rejson = treeDataToJson(treeData[0]) 


function get_dev_content()
{
  var MyDiv1 = document.getElementsByClassName('canvas-panel')[0];
  //////console.log(MyDiv1.innerHTML)
  //console.log("===================DOM=====================");
  ////console.log(MyDiv1)
  const json = JSON.stringify(converter(MyDiv1), null, 4);
  //console.log(json);
  //////console.log(json2html(json));

  

  const data = JSON.parse( json );
  //console.log("======3.0=======")
  //console.log( data )

  var treeData = [mapDataToTreeData(data)];

  //console.log("======3=======")
  //console.log( treeData )

  var rejson = treeDataToJson(treeData[0]) 
  //console.log("======3.1=======")
  //console.log(rejson)

  //console.log("======3.2=======")
  //console.log(converter_worked( rejson ))

  document.getElementsByTagName('body')[0].appendChild(   json2html( JSON.stringify( converter_worked( rejson ), null, 4) ) );

}

function change_dev_content(treeData)
{

  console.log("==========================change[1]==============================")

  console.log(treeData[0])

  var html = json2html( JSON.stringify( converter_worked( treeDataToJson(treeData[0]) ), null, 4) )

  //console.log("==========================change[2]==============================")
  //console.log(html.innerHTML)

  //console.log("==========================change[3]==============================")
  var canvas_html = document.getElementsByClassName('canvas-panel')[0];
  //console.log(canvas_html)
  canvas_html.innerHTML = html.innerHTML;

  //document.getElementsByTagName('body')[0].appendChild(  html  );

}

import { useStore } from "../store";
import {useCoreDataStore} from '../store/core'
import {useUIStore} from '../store/ui'

class Tree extends React.Component {



  constructor(props) {

    super(props);

    var MyDiv1 = document.getElementsByClassName('canvas-panel')[0];
    //////console.log(MyDiv1.innerHTML)
    //console.log("===================DOM=====================");
    ////console.log(MyDiv1)
    const json = JSON.stringify(converter(MyDiv1), null, 4);
    //console.log(json);
    //////console.log(json2html(json));

    

    const data = JSON.parse( json );
    //console.log("======3.0=======")
    //console.log( data )

    var tree = [mapDataToTreeData(data)];

    this.state = {
      searchString: "",
      searchFocusIndex: -1,
      searchFoundCount: 0,
      treeData : tree
    };

  }




  handleTreeOnChange = (treeData) => {
    
    this.setState({ treeData });

    console.log("===================change======================");
    console.log(treeData);
    change_dev_content(treeData);

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


/*
    var MyDiv1 = document.getElementsByClassName('canvas-panel')[0];
    //////console.log(MyDiv1.innerHTML)
    //console.log("===================DOM=====================");
    ////console.log(MyDiv1)
    const json = JSON.stringify(converter(MyDiv1), null, 4);
    //console.log(json);
    //////console.log(json2html(json));

    

    const data = JSON.parse( json );
    //console.log("======3.0=======")
    //console.log( data )

    var tree = [mapDataToTreeData(data)];

    this.setState({
      treeData: tree
    });
//*/


    return (
      <div className="wrapper_tree">
        <div className="bar_wrapper_tree">
          <button
            onClick={ () => {
                useStore.getState().setPink(), // <-- Changed code
                console.log("click");console.log(useStore.getState().isPink);
                //useCoreDataStore.getState().deleteAllElement();
                useCoreDataStore.getState().addNewElement(useUIStore.getState().setTargetId);

              }
            }
          >
          pink
          </button>
          <p>{useStore.getState().isPink ? 'Is Pink' : 'Is Not Pink'}</p>
          <button onClick={() => get_dev_content()} >New Dev</button>
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