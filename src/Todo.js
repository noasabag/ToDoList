import './App.css';
import React from 'react';
import List from './List.js'
import './ToDo.css'

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state={list:[]}
    let a = ''
  }
  
  addMission = (event) => {
    event.preventDefault();
    let b=Math.random()
    this.setState( {
      list: [...this.state.list,{id:b, description:this.state.a, completed:false}]
    }) 
     } 


     InputValue=(event)=>{
      this.setState({a:event.target.value})
     }


     removeMission=(missionID)=>{
      let newARR = this.state.list.filter(object=>{
      if(object.id===missionID) return false
      else return true
    })
    this.setState({list:newARR})
     }

  changeState=(id)=>{       //mission completes or not
   var a =this.state.list.length
    for (let i = 0; i < a; i++) {
      if( this.state.list[i].id===id){
        this.setState({list:
        [  ...this.state.list.slice(0,i),
          Object.assign({}, this.state.list[i], {completed:!this.state.list[i].completed}), ...this.state.list.slice(i+1)]
        })
       }
    }
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
             return (<List key = {element.id} changeState={this.changeState} listItem={element} removeMission={this.removeMission} />
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