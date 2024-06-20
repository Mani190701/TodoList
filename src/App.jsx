import React,{useState} from 'react';
import TodoList from './todoList';
import './App.css';

function App() {
const [todoName,setTodoName]=useState("");

const [list,setList]=useState([]);
  const UpdateTodo =(e)=>{
    setTodoName(e.target.value);

  }
const addToDo =()=>{
  setList([...list,
    {
      name:todoName,
      completed:false
    }
  ]);
  setTodoName("");
  localStorage.setItem(todoName);
  console.log();
}
 
const onDone =(item)=>{

  let newList =list.map(listItem =>{
    if(listItem.name === item.name){
      return{...listItem,completed:!listItem.completed};
    }
    return listItem;
  });
  console.log(item);
  setList(newList);
}
const onDelete =item =>{
  let newList =list.filter(listItem =>{
    if(listItem.name === item.name){
      return false;
    }
    return true;
  });
  console.log(item);
  setList(newList);
}
  return (
<>
<h1>ToDo List</h1>
<input type="text"  value={todoName} onChange={UpdateTodo} />
<button type="button" onClick={addToDo}>Add</button>
{
  list.map(item => <TodoList obj={item} onDone={onDone} onDelete={onDelete}/>)
}
</>
  );
}

export default App;
