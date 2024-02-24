import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// for retrieving state from store
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/slice/todo'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  console.log(state.todo);
  if (state.todo.isLoading) {
    return (<h1>Loading</h1>)
  }
  return (
    <>
      <div>
        <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>
        {
          state.todo.data && state.todo.data.map(e => {
            return (
              <li>{e.title}</li>
            )
          })
        }
      </div>
    </>
  )
}

export default App
