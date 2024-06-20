import React from 'react'

export default function todoList(props) {
  return (
    <div className={props.obj.completed && "completed"}>
      <p>{props.obj.name}</p>
      <button type="button" onClick={() =>props.onDone (props.obj)}>Mark us done</button>
      <button type="button" onClick={() =>props.onDelete (props.obj)}>delete</button>
    </div>
  )
}
