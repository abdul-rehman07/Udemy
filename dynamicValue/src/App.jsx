import { useState } from 'react'
import './App.css'
import reactimg from './assets/react.svg'

const names = ['sun','sky','stars']

function genRmdomNum(max)  {
return Math.floor(Math.random() * (max  + 1))
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={reactimg} alt="styled atom" />
   <div >  {names[genRmdomNum(2)]} Hello world</div>
    </>
  )
}

export default App
