import React from 'react'

const App = () => {

  const user = {
    userName: 'Noor Mohammad',
    age: 23,
    city: 'Deoria'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const user1 = JSON.parse(localStorage.getItem("user"))
  console.log(user1);

  return (
    <div>App</div>
  )
}

export default App