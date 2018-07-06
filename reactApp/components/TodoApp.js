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

  removeTodo(index){

    dummyData.splice(index,1);
    this.setState({
      todos: dummyData
    })
  }

toggle(index){

if(dummyData[index].completed===true){
    dummyData[index].completed=false;
} else {
  dummyData[index].completed=true;
}

  this.setState({
    todos: dummyData
  })

}
  addTodo(task){

dummyData.push({taskText: task, completed: false});
//console.log(dummyData);
this.setState({
  todos: dummyData
})
  }

  render(){
    return(
      <div>
      <InputLine submit={(task) => this.addTodo(task)}  />
      <TodoList todos={this.state.todos} todoXClick={(index) => this.removeTodo(index)} toggle={(index) => this.toggle(index)}/>
    </div>
  )



  }
}

export default TodoApp
