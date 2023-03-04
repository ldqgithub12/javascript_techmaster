import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
    const {appName} = props;
    const todos =["Đá bóng","làm bài tập","Đi chơi"];
  return (
    <React.Fragment>
        <div>{appName}</div>
        {
            todos.map((todo,index)=>{
                <ToDoItem key = {index} title = {todo}></ToDoItem>
            })
        }
    </React.Fragment>
  )
}

export default ToDoList