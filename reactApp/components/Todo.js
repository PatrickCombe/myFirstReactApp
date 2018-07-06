import React from 'react';



function Todo(props){

return  (<li onClick= {(e) => (props.toggle(e))} ><button onClick= {(e) => (props.xClick(e))} >X</button> {props.task.completed ? <strike  > {props.task.taskText} </strike> : props.task.taskText  } </li>)




}

export default Todo;
