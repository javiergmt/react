/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import './App.css'
import  { useCounterStore } from './store/counterStore'
import { shallow } from 'zustand/shallow'

function App() {

  /* Esto seria acceso a valores por separado
  const count = useCounterStore( (state) => state.count)
  const titulo = useCounterStore( (state) => state.titulo)
  */

  const {count,titulo, posts} = useCounterStore( (state) => ({
    count: state.count,
    titulo: state.titulo,
    posts: state.posts
  }),shallow) // Se agrega shallow para que pueda comparar cada valor del objeto

  //console.log(values)
  const { increment , getPosts, clearStore, multiply} = useCounterStore()

  useEffect( () => {
    getPosts()
  },[] )
  
 
  return (
    <>
      <h1>Zustand</h1>
      <h2>{titulo}: {count}</h2>
      <button onClick={() => {
        increment(10)
      }}>
        Sumar de a 10
      </button>
      <button onClick={() => clearStore()}>
        Clear
      </button>
      <button onClick={() => multiply(2)}>
        Multiply
      </button>

      <hr/>
      {JSON.stringify(posts)}

    </>
  )
}

export default App
