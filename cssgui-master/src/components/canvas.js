import React from 'react'
import {
  createStyleObj,
  createStyleText
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
    const elementState = elementCollection[targetId]["css"];

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
      ...elementCollection[targetId]["css"],
      left: dragStartElementPointX + (clientX - dragStartPointX),
      top: dragStartElementPointY + (clientY - dragStartPointY),
    })

  }

const tree = {
  name: "Root",
  children: [
    {
      name: "Child 1",
      children: [],
    },
    {
      name: "Child 2",
      children: [],
    },
  ],
};

function createDivTree(tree,elementState,id) {
  if (!tree) {
    return null;
  }

  return (
    <div style={createStyleObj(elementState)}
         onMouseDown={recordMouseDownPosition.bind(this, id)}
         onMouseUp={recordMouseUpPosition}
         onClick={() => setTargetId(id)}
         key={id}

    >
      {tree.name}
      {tree.children.map((child) => (
        <div key={id}>{createDivTree(child,elementState,id)}</div>
      ))}
    </div>
  );
}

  return <div className="canvas-panel" onMouseMove={mouseMoveOnCanvas} >{Object.keys(elementCollection).map(id => {
    const elementState = elementCollection[id]["css"];

    console.log("==========elementState=========")
    console.log(elementState)

    return createDivTree( tree, elementState, id);

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


