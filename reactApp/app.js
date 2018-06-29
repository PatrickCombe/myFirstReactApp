import React from 'react';
import ReactDOM from 'react-dom'

//var dummyData=['Go buy groceries', 'Get a haircut', 'Email John'];

var dummyData=[{ taskText: "Go buy groceries", completed: false },
{ taskText: "Get a haircut", completed: false },
{ taskText: "Email John", completed: true }
]
class TodoList extends React.Component{

  render(){
    return (
      <ul className="test" >
        {this.props.todos.map((task)=> task.completed?  <li  ><button>X</button> {task.taskText} </li> : <li><button>X</button> <strike>{task.taskText} </strike></li>)}
      </ul>
    )
  }
}

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
