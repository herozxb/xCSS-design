import React from 'react'
import {
  createStyleObj
} from "../utils";

import {useCoreDataStore} from '../store/core'
import {useUIStore} from '../store/ui'
import Footer from "./footer";
import AnimationPanel from "./animation-panel";

function Canvas() {

  const UIState = useUIStore();
  const dataState = useCoreDataStore();
  const {
    dragStartPoint,
    setDragStartPoint,
    dragBegin,
    setDragBegin,
    dragStartElementPoint,
    setDragStartElementPoint,
    showAnimationPanel,
  } = UIState;
  const { elementCollection, updateSingleElement, targetId, setTargetId} = dataState;

  function recordMouseDownPosition(targetId, event) {
    const { clientX, clientY } = event;
    const elementState = elementCollection[targetId];

    setTargetId(targetId);
    setDragStartElementPoint([elementState.left, elementState.top])
    setDragStartPoint([clientX, clientY])
    setDragBegin(true)
  }

  function recordMouseUpPosition() {
    setDragBegin(false)
  }

  function mouseMoveOnCanvas(event) {
    const { clientX, clientY } = event;
    if (!dragBegin) {
      return;
    }
    const [dragStartPointX, dragStartPointY] = dragStartPoint
    const [dragStartElementPointX, dragStartElementPointY] = dragStartElementPoint

    updateSingleElement({
      ...elementCollection[targetId],
      left: dragStartElementPointX + (clientX - dragStartPointX),
      top: dragStartElementPointY + (clientY - dragStartPointY),
    })

  }

  return <div className="canvas-panel" onMouseMove={mouseMoveOnCanvas} >{Object.keys(elementCollection).map(id => {
    const elementState = elementCollection[id];
    return <div
      className='canvas-item'
      onMouseDown={recordMouseDownPosition.bind(this, id)}
      onMouseUp={recordMouseUpPosition}
      onClick={() => setTargetId(id)}
      key={id}
      style={createStyleObj(elementState)}>
      {id == targetId && <div className="selected-element-cursor"></div>}
    </div>
  })}
    {showAnimationPanel && <AnimationPanel />}
    <Footer></Footer>
  </div>
}

export default Canvas



/*

function mapDivTree(element) {
  const newChildren = Array.from(element.children).map(child => {
    if (child.tagName === 'DIV') {
      return mapDivTree(child);
    } else {
      return child;
    }
  });
  const newElement = document.createElement('div');
  const styles = element.getAttribute('style');
  if (styles) {
    styles.split(';').forEach(style => {
      if (style) {
        const [property, value] = style.split(':').map(s => s.trim());
        newElement.style.setProperty(property, value);
      }
    });
  }
  newElement.appendChild(document.importNode(element, true));
  newElement.replaceChildren(...newChildren);
  return newElement;
}

const tree = document.createElement('div');
tree.innerHTML = `
  <div style="background-color: red;">
    <span>Hello</span>
    <div style="background-color: blue;">
      <span>World</span>
    </div>
  </div>
`;

const mappedTree = mapDivTree(tree);

document.body.appendChild(mappedTree);


//*/