import React from 'react';
import ReactDOM from 'react-dom'

import TodoApp from './TodoApp'
import Todo from './Todo'
import InputLine from './InputLine'


class TodoList extends React.Component{

  render(){
    return (
      <ul className="test" >
        {this.props.todos.map((task)=> <Todo task={task}/> )}
      </ul>
    )
  }
}
export default TodoList;
