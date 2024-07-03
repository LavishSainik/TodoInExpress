import { useState,useEffect } from 'react'
import { CreateTodos } from './components/CreateTodos'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/getTodo")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todoList)
      })
  }, []) 

  return (
    <>
      <h1>Todo App</h1>
      <CreateTodos />
      <Todos listOfTodos={todos}  />
    </>
  )
}

export default App
