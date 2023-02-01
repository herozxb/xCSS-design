import React, {useState} from 'react';
import hljs from 'highlight.js';
import reactToCSS from 'react-style-object-to-css'
import { Button, ButtonGroup, Dialog, FormGroup, Classes, Callout, Icon, Switch,Tree } from "@blueprintjs/core";

import {StyleCodeDialog} from '../components/style-code-dialog'
import {GradientPanel} from '../components/gradient-panel'
import { NumericInput } from '../components/numeric-input'
import {useCoreDataStore} from '../store/core'
import {useUIStore} from '../store/ui'
import {createStyleObj} from '../utils/style'
import {useConfigStore} from '../store/config'


import '@blueprintjs/core/lib/css/blueprint.css';

function DevPanel() {



  const [isFolderOpen, setFolderOpen] = React.useState(false);
  // Tree Data
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

  function get_dev_content()
  {
   var MyDiv1 = document.getElementsByClassName('canvas-panel')[0];
   console.log(MyDiv1.innerHTML)
  }


  return <div >

    <ButtonGroup fill style={{ marginTop: 10 }}>
            <Button onClick={() => get_dev_content()} icon="plus">New Dev</Button>
    </ButtonGroup>

    <div style={{
        display: 'block',
        width: 200,
        padding: 0    }}>
        <Tree
            contents={treeData}
            onNodeMouseEnter={() => setFolderOpen(true)}
            onNodeMouseLeave={() => setFolderOpen(false)}
        />
    </div>

  </div>
}

export default DevPanel
