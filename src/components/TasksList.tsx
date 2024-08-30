import '../beauty.css'
import {Input} from './Input'

// import React from 'react'

export const TasksList  = () => {

    return (
        <div className='flex gap-5 flex-col'>
            <p className='text-extrabold text-[2rem]'>All tasks</p>
            <ul>
                <li className='flex flex-row gap-5 border-b border-solid border-slate-900 pb-5'>
                    <Input type="checkbox" className='w-7 bg-red-400' id="done" />
                    <p>Task1</p>
                    <Input type='button' id='del' value='Delete' className=' text-black rounded-lg bg-red-400 w-[10rem] h-7 cursor-pointer'/>
                    
                </li>
            </ul>
        
  
        </div>
    )
}