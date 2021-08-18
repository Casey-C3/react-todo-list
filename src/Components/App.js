import { useEffect, useState } from 'react'
import Header from './Header'
import ToDo from './ToDo'
import Form from './Form'



const App = () => {
  const[todos, setToDos] = useState([])

  const[filterState,setFilterState] = useState("all")
  const[filteredList, setFilteredList] = useState([])
  
  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id)) 
  }

  const toggleFinished = (id) => {
    setToDos(todos.map(todo => todo.id === id ? {...todo,complete:!todo.complete} : todo))
  }

  useEffect(() => {
    getFromLocal()
    
  },[])

  useEffect(() => {
    filterArray()
    saveToLocal()
    

  },[todos,filterState])

  const addTask = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 3
    const newToDo = {id, ...todo,complete:false }
    setToDos([...todos,newToDo])
    
  }

  const getFromLocal = () => {
    if(localStorage.getItem('todos')) {
      const x = localStorage.getItem('todos',JSON.stringify(todos))
      setToDos(JSON.parse(x))
    } else {
      localStorage.setItem('todos',JSON.stringify([]))

    }

  }

  const saveToLocal = () => {
    localStorage.setItem('todos',JSON.stringify(todos))

    
  }
 
  const filterArray=() => {

    if(filterState === 'complete') {
      setFilteredList(todos.filter(todo => todo.complete === true))
    } else if(filterState === 'incomplete') {
      setFilteredList(todos.filter(todo => todo.complete === false))
    } else {
      setFilteredList(todos)
    }

  }




  return (
    <div className="container">
      <Header setFilterState = {setFilterState}/>
      <Form onAdd = {addTask}/>
      <ToDo onToggle = {toggleFinished} onDelete={deleteToDo} filteredList={filteredList} todos={todos}/>
      
    </div>
   
  )
}

export default App;
