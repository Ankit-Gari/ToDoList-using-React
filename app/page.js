"use client"
import { CONFIG_FILES } from 'next/dist/shared/lib/constants'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className='flex justify-center'>No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-center mb-8'>
          <div className='flex justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-semibold'>{t.desc}</h6>
          <button 
          onClick={()=>{
            deleteHandler(i)  
          }}
          className='bg-red-500 text-white font-bold rounded px-3 py-2'>Delete</button>
        </div>
        </li>
        
      )
    })
  }

  return (
    <>
      <h1 className='bg-zinc-600 text-white text-4xl p-5 text-center font-bold'>Ankit's ToDo List</h1>
      <form onSubmit={submitHandler} className='flex items-center justify-center'>
        <input type='text'
          className='m-5 border-cyan-800 border-4 px-5 py-3 text-2xl rounded'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input type='text'
          className='m-5 border-cyan-800 border-4 px-5 py-3 text-2xl rounded'
          placeholder='Enter Description Text'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-5 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr className='border-2 border-zinc-600' />
      <br />
      <div className='p-8 bg-zinc-400'>
        {renderTask}
      </div>
    </>
  )
}

export default page