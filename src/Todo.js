import React from 'react';
import List from './List.js'
import './App.css';
import './ToDo.css'

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = { list: [] }
    let missionDescription = ''
  }
  
  addMission = (event) => {
    event.preventDefault();
    let missionId= Math.random()
    this.setState( {
      list: [ ...this.state.list,
         { id: missionId, description: this.state.missionDescription, completed: false } ]
                  }) 
  } 


     InputValue=(event)=>{
      this.setState({ missionDescription: event.target.value })
     }


     removeMission=(missionID)=>{
      const newARR = this.state.list.filter(object=>
      object.id!==missionID
        )
       this.setState({ list: newARR })
      }

  changeState=(id)=>{       //mission completes or not
    this.state.list.length.map((object, index )=> {
      if( object.id===id){
        this.setState({ list: 
        [  
          ...this.state.list.slice(0,index),
          Object.assign({},
            object, 
          { completed: !object.completed }),
          ...this.state.list.slice(index+1)
        ]
        })
       }
    })
  }
  
  render(){
    
return(
  <div>
    <form ref="form" onSubmit={this.addMission}>
     <h1>To Do List</h1>
     <input  placeholder='decription' id = 'myInput' onChange={this.InputValue} /> 
       <button type="submit">add </button> 
      
            <ul>
               {
                this.state.list.map(element => {
             return (<List key = {element.id} changeState = { this.changeState } listItem = { element } removeMission={this.removeMission} />
)
            }
                  ) }
             </ul>
             </form>
  </div>
  )


}

};
export default Todo;