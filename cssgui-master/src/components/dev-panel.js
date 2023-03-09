import React, {useState} from 'react';
import hljs from 'highlight.js';
import reactToCSS from 'react-style-object-to-css'
import { Button, ButtonGroup, Dialog, FormGroup, Classes, Callout, Icon, Switch } from "@blueprintjs/core";

import {StyleCodeDialog} from '../components/style-code-dialog'
import {GradientPanel} from '../components/gradient-panel'
import {NumericInput} from '../components/numeric-input'
import {useCoreDataStore} from '../store/core'
import {useUIStore} from '../store/ui'
import {createStyleObj} from '../utils/style'
import {useConfigStore} from '../store/config'

import SortableTree from '@nosferatu500/react-sortable-tree';

import '@nosferatu500/react-sortable-tree/style.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import Tree from "./tree"

function DevPanel() {


  const seed =   [   { title: 'Chicken'}, ]

  const [isFolderOpen, setFolderOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDiv, setIsOpenDiv] = useState(false);

  const [divData, setDivData] = useState("seed");

  var id = 0

  function mapDataToTreeData(data) {

      var node = {}

      for (let key in data) 
      {
        var value = data[key];

        ////console.log("==========1==========")
        ////console.log(key)
        ////console.log(value)

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
          ////console.log("==============attributes===============")
          ////console.log(value)
          node.label = "DIV" + " " + value[0]["name"] + ":" + value[0]["value"] 
        }

        if (key ==="textContent") {

          node.nodeType = 3
          node.id = id
          node.label = "TEXT"
          node.icon = "folder-close"
          node.textContent = value

          id = id + 1

          ////console.log("===============textContent==================")
          ////console.log(node)
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
    //////console.log(MyDiv1.innerHTML)
    setDivData(MyDiv1.innerHTML)
    console.log("========================================");
    const json = JSON.stringify(converter(MyDiv1), null, 4);
    console.log(json);
    //////console.log(json2html(json));
    document.getElementsByTagName('body')[0].appendChild(json2html(json));

  }




  return <div >

    <ButtonGroup fill style={{ marginTop: 10 }}>
            <Button onClick={() => get_dev_content()} icon="plus">New Dev</Button>
    </ButtonGroup>
    <ButtonGroup fill style={{ marginTop: 10 }}>
            <Button intent="primary" icon="code" onClick={() => setIsOpen(!isOpen) } >DIV TREE</Button>
            <Button intent="primary" icon="code" onClick={() => setIsOpenDiv(!isOpenDiv) } >DIV TEXT</Button>
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

      <Dialog isOpen={isOpenDiv} style={{ width:800, height: 800 }}>

        <div style={{ width:800, height: 800, overflow: "scroll" }}>
          <div><pre>
            {divData.split("<div").map((line, index) => {
              if(index!=0){ return <p key={index}>{ "<div" + line }</p> }
            }
            )}
          </pre></div>
        </div>

      </Dialog>

    </div>

  </div>
}

export default DevPanel
