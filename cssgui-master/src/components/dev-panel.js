import React, {useState} from 'react';
import hljs from 'highlight.js';
import reactToCSS from 'react-style-object-to-css'
import { Button, ButtonGroup, Dialog, FormGroup, Classes, Callout, Icon, Switch } from "@blueprintjs/core";

import {StyleCodeDialog} from '../components/style-code-dialog'
import {GradientPanel} from '../components/gradient-panel'
import { NumericInput } from '../components/numeric-input'
import {useCoreDataStore} from '../store/core'
import {useUIStore} from '../store/ui'
import {createStyleObj} from '../utils/style'
import {useConfigStore} from '../store/config'

import SortableTree from '@nosferatu500/react-sortable-tree';

import '@nosferatu500/react-sortable-tree/style.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import Tree from "./tree"

function DevPanel() {


  const seed =   [
        { title: 'Chicken'},
      ]

  const [isFolderOpen, setFolderOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const [treeData, setTreeData] = useState(seed);



  const jsonData = [{
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
]

//*/

/*
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
                            "nodeType": 3,
                            "tagName": "a",
                            "textContent": "Source Code"
                        },



                        {    
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
                                                    "nodeType": 3,
                                                    "tagName": "a",
                                                    "textContent": "Source Code"
                                                },

                                                                        {
                                                    "nodeType": 3,
                                                    "tagName": "a",
                                                    "textContent": "Source Code"
                                                },


                          ]
                        },

                        {    
                          "nodeType": 1,
                          "tagName": "DIV",
                          "attributes": [
                              {
                                  "name": "class",
                                  "value": "canvas-panel"
                              }
                          ],
                          "children": []
                        },



               ]

  }
  ;

    //*/   



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


  const data = JSON.parse( JSON.stringify( json_data ) );

  var id = 0

  function mapDataToTreeData(data) {

      var node = {}

      for (let key in data) 
      {
        var value = data[key];

        //console.log("==========1==========")
        //console.log(key)
        //console.log(value)

        if (key ==="nodeType") {
          node.nodeType = 1
          node.id = id
          node.label = "DIV"
          node.hasCaret = true
          node.isExpanded = isFolderOpen
          node.icon = "folder-close"
          id = id + 1

        }

        if (key ==="tagName") {
          node.tagName = value
        }

        if (key ==="attributes") {
          node.attributes = value
          //console.log("==============attributes===============")
          //console.log(value)
          node.label = "DIV" + " " + value[0]["name"] + ":" + value[0]["value"] 
        }

        if (key ==="textContent") {

          node.nodeType = 3
          node.id = id
          node.label = "TEXT"
          node.icon = "folder-close"
          node.textContent = value

          id = id + 1

          //console.log("===============textContent==================")
          //console.log(node)
          return node

        }

        

        if (key ==="children") {
          var treeData = [];

          if (typeof value === "object") {
           var children = []

            for (let i = 0; i < value.length; i++) {
              children.push(mapDataToTreeData(value[i]));
            }

            node.childNodes = children

            if (value.length==0) {
              node.icon = "folder-close" 
              node.hasCaret = false 
            }
            
            
          } else {

            node.childNodes = [];
            
          }


          return node


        }
     
      }
      
    }


  const tree_data = [mapDataToTreeData(data)];


  function converter(dom) {

      const obj = {};
      if (dom.nodeType === Node.TEXT_NODE) {
          obj.nodeType = 3
          obj.tagName = "a"
          obj.textContent = dom.nodeValue;
          return obj;
      }
      if (dom.nodeType === Node.DOCUMENT_NODE) {
          ////console.log("document")
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

  const json2html = json =>
    toNode(JSON.parse(json))




  function get_dev_content()
  {
    var MyDiv1 = document.getElementsByClassName('canvas-panel')[0];
    ////console.log(MyDiv1.innerHTML)
    ////console.log("========================================");
    const json = JSON.stringify(converter(MyDiv1), null, 4);
    ////console.log(json);
    ////console.log(json2html(json));
    document.getElementsByTagName('body')[0].appendChild(json2html(json));

  }


  function DraggableItem() {
    const [collectedProps, drag] = useDrag({
      item: { id: 1 }, type: "DRAGGABLE_ITEM"
    });

    return <div ref={drag}>I am draggable </div>;
  }

  function DroppableItem(props) {
    const [collectedProps, drop] = useDrop({
      accept: "DRAGGABLE_ITEM",
      drop: (item, monitor) => {
        //console.log(item);
      }
    });

    return <div ref={drop}>Drop me here!</div>;
  }



  return <div >

    <ButtonGroup fill style={{ marginTop: 10 }}>
            <Button onClick={() => get_dev_content()} icon="plus">New Dev</Button>
    </ButtonGroup>
    <ButtonGroup fill style={{ marginTop: 10 }}>
            <Button intent="primary" icon="code" onClick={() => setIsOpen(!isOpen) } >Show Dev Tree</Button>
    </ButtonGroup>


    <div style={{
        display: 'block',
        width: 800,
        padding: 0    }}>

      <Dialog isOpen={isOpen} style={{ width:800, height: 800 }}>

        <div style={{ width:800, height: 800 }}>
          <Tree />
        </div>

      </Dialog>

    </div>

  </div>
}

export default DevPanel
