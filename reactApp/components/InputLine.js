import React from 'react';
import ReactDOM from 'react-dom'

import TodoList from './TodoList'
import TodoApp from './TodoApp'
import Todo from './Todo'


class InputLine extends React.Component{

  constructor(props){
    super(props);
    this.state={
      task:''
    }
  }
  handleChange(e) {
     e.preventDefault()
     this.setState({task: e.target.value})
   }

   handleSubmit(e){
     e.preventDefault();
     this.props.submit(this.state.task)
   }


  render(){
    return(
      <div>
      <input
       onChange={(e) => this.handleChange(e)}
        type="text" ></input>
      <button onClick= {(e) => (this.handleSubmit(e))} >Add todo</button>
    </div>
    )
  }
}

export default InputLine;
