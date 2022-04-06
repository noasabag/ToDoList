import List from './List.js'
import './App.css';
import './ToDo.css'
import { useState, useRef } from 'react';

const Todo = ()=>{

  const [list, setList] = useState([]) 
  const [missionDescription,setMissionDescription ] = useState("") 
  
  
  const addMission = (event) => {
    event.preventDefault();
    let missionId= Math.random()
    setList(
       [ ...list,
         { id: missionId, description: missionDescription, completed: false } ]
                  ) 
  } 


  const InputValue=(event)=>{
    setMissionDescription(event.target.value)
     }


     const removeMission=(missionID)=>{
      const newARR = list.filter(object=>
      object.id!==missionID
        )
      setList(newARR)
      }

 const changeState=(id)=>{       //mission completes or not
    list.map((object, index )=> {
      if( object.id===id){
        setList( 
        [  
          ...list.slice(0,index),
          Object.assign({},
            object, 
          { completed: !object.completed }),
          ...list.slice(index+1)
        ])
        
       }
    })
  }
  

return(
  <div>
    <form onSubmit={addMission}>
     <h1>To Do List</h1>
     <input  placeholder='decription' id = 'myInput' onChange={InputValue} /> 
       <button type="submit">add </button> 
      
            <ul>
               {
                list.map(element => {
             return (<List key = {element.id} changeState = { changeState } listItem = {element} removeMission={removeMission} />
)
            }
                  ) }
             </ul>
             </form>
  </div>
  )




}

;
export default Todo;