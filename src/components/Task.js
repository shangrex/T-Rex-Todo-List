import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Task({task, onDelete}) {
    return (
        <div className='task' >

            <h3>
            {task.text} 
            <FaTimes 
                style={{color:'red' , curser:'pointer'}}
                onClick = {() => {onDelete(task.id)}}
            />
            </h3>
   
            <p>{task.time}</p>
        </div>
    )
}
