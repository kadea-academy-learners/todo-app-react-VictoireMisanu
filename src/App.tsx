// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { FormCreateTask } from './components/FormCreateTask'
import { Header } from './components/Header'
import { Input } from './components/Input'
import {TasksList} from './components/TasksList'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <form className='flex justify-center flex-col items-center w-full h-full mt-16 gap-5'>
        <p className='font-extrabold text-[3rem] text-slate-600'>Create a task</p>
        <div className='flex gap-5'>
          <Input type='text' id='TaskName' placeholder='Task name' className='border-solid border-2 border-black bg-slate-800 text-white rounded-lg w-[10rem] h-13'/>
          <Input type='date' id='TaskName' className='border-solid border-2 border-black bg-slate-800 text-white rounded-lg w-[10rem] h-13'/>
          <Input type='submit' id='TaskName' value='Add' className='border-solid border-2 border-gray-500 rounded-lg bg-lime-400 w-[15rem] cursor-pointer'/>
        </div>
      </form>
      <TasksList />
    </>
  )
}

export default App
