import { useState } from 'react'

import ToDo from './ToDo'
import Form from './Form'



const App = () => {
  const[todos, setToDos] = useState([{
    id: 1,
    text:'learn a new laguage',
    complete:false
  },
  {
    id:2,
    text:'learn react',
    complete:false
  }])

  const[completedToDos, setCompleteToDos] = useState([])



  //delete if deletes the task if id is equal to the same
  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id)) //if (todo.id not equal to id then keep it)
  }

  const toggleFinished = (id) => {
    
    setToDos(todos.map(todo => todo.id === id ? {...todo,complete:!todo.complete} : todo))
  

    
  }

  const addTask = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newToDo = {id, ...todo,complete:false }
    setToDos([...todos,newToDo])
    
  }


  return (
    
    <div className="container">
      
      <h2>To-Do List</h2>
      <Form onAdd = {addTask}/>
      {todos.length > 0 ? <ToDo onToggle = {toggleFinished} todos={todos} onDelete={deleteToDo}/> : 'List is empty'}
    
    </div>
   
  )
}

export default App;
