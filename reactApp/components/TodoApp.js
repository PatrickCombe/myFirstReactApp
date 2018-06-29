import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import Todo from './Todo'
import InputLine from './InputLine'

var dummyData=[{ taskText: "Go buy groceries", completed: false },
{ taskText: "Get a haircut", completed: false },
{ taskText: "Email John", completed: true }
]

class TodoApp extends React.Component{
constructor(props){
  super(props);

  this.state={
    todos: []
  }
}
componentDidMount(){
  this.setState({todos: dummyData})

  }

  render(){
    return(
      <div>
        <InputLine  />
      <TodoList todos={this.state.todos} />
    </div>
  )



  }
}

export default TodoApp
