import '../beauty.css'

// import React from 'react'

export const FormCreateTask  = () => {
    return (
        <form>
            <div>
                <label htmlFor="taskName">Task name</label>
                <input className='border-solid border-black' id='taskName' type="text" />
            </div>
            <div>
                <label htmlFor="deadLine">DeadLine</label>
                <input type="date" name="" id="deadLine" />
            </div>
            <input type="submit" value="Ajouter" />
        </form>
    )
}