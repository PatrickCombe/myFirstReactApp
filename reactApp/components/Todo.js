import React from 'react';



function Todo(props){

return  (<li><button>X</button> {props.task.completed ? <strike> {props.task.taskText} </strike> : props.task.taskText  } </li>)




}

export default Todo;
