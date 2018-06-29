import React from 'react';
import ReactDOM from 'react-dom'

var dummyData=['Go buy groceries', 'Get a haircut', 'Email John'];

class TodoList extends React.Component{

  render(){
    return (
      <ul>
        {dummyData.map((task)=> <li><button>X</button> {task} </li>)}
      </ul>
    )

  }



}


ReactDOM.render(<TodoList />,
   document.getElementById('root'));
