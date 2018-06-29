import React from 'react';
import ReactDOM from 'react-dom'

import TodoList from './TodoList'
import TodoApp from './TodoApp'
import Todo from './Todo'


class InputLine extends React.Component{

  render(){
    return(
      <div>
      <input type="text" ></input>
      <button>Add todo</button>
    </div>
    )
  }
}

export default InputLine;
