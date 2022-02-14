import React from 'react';
import ReactDOM from 'react-dom';
import Todo  from './Todo.js'

    
    function List (props){

      return (
        <div>
        <li key = {props.listItem.id} className={props.listItem.completed ? 'done' : ''} 
        onClick={()=>{props.changeState(props.listItem.id) }}>  { props.listItem.description } </li>
        <button onClick={() =>props.removeMission( props.listItem.id)}><span>&#10060;</span></button>
         </div>
            )
    }

export default List;

