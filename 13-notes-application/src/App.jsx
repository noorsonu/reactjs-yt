import React from 'react'
import { X } from 'lucide-react';
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form className='flex gap-4 flex-col  p-10 items-start lg:w-1/2' onSubmit={(e) => {
        submitHandler(e)
      }} >
        <h1 className=' text-4xl font-bold'>Add Notes</h1>

        <input type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium outline-none w-full py-2 border-2 rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea type="text"
          placeholder='Write Details'
          className='px-5 font-medium  outline-none w-full py-2 h-50 border-2 rounded  '
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='cursor-pointer outline-none font-medium active:scale-95 bg-white w-full text-black px-5 py-2 rounded '>Add Notes</button>

      </form>
      <div className='p-10 lg:border-l-2 lg:w-1/2 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 items-start justify-start mt-5 flex-wrap  h-[90%] overflow-auto'>
          {
            task.map(function (elem, idx) {
              return <div key={idx} className="relative h-52 px-6 py-7 bg-cover w-40 rounded-2xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <h2 onClick={() => {
                  deleteNote(idx)
                }} className='cursor-pointer absolute top-44 right-2 bg-red-500 p-1 rounded-full'><X size={15} color='#ffffff' strokeWidth={8} /></h2>
                <h3 className=' leading-tight text-xl font-bold '>{elem.title}</h3>
                <p className='mt-2 leading-tight pb-2 font-medium text-gray-500'>{elem.details}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App