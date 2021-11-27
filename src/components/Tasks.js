import React from 'react'
import Task from './Task'

export default function Tasks({tasks, onDelete}) {
    return (
        <>
            {
                tasks.map((task, index)=>(
                    <Task 
                        key={index}
                        task={task}
                        onDelete={onDelete}
                       
                    />
                ))
            }
        </>
    )
}
