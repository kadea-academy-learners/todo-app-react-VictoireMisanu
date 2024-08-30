import '../beauty.css'


// import React from 'react'

export const FormCreateTask  = () => {

    return (
        <form className='flex justify-center flex-col items-center w-full h-full mt-16 gap-5'>
            <p className='font-extrabold text-[3rem] text-slate-600'>Create a task</p>
            <div className='flex gap-5'>
                <input className='border-solid border-2 border-black bg-slate-800 text-white rounded-lg w-[10rem] h-13' id='taskName' type="text" placeholder='Taskname' />
                <input className='border-solid border-2 border-black bg-slate-800 text-white rounded-lg w-[10rem] h-13' type="date" id="deadLine"/>
                <input className='border-solid border-2 border-gray-500 rounded-lg bg-lime-400 w-[15rem] cursor-pointer' type="submit" value="Add" />
            </div>
        
  
        </form>
    )
}