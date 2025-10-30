import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function incNum() {
    setNum(num + 1)
  }

  function decNum() {
    setNum(num - 1)
  }

  function reset() {
    setNum(0)
  }

  return (
    <div className='btn'>
      <h1>Value of num is : {num}</h1>
      <button onClick={incNum}>Inc num</button>
      <button onClick={decNum}>Dec num</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App