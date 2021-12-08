import React from 'react'
import Taskbutton from './Taskbutton'

export default function Header({showtask, onTask}) {
    return (
        <div className='header'>
            <h1>T-Rex-Todo-List</h1>
            <Taskbutton 
                color={'black'}
                showtask={showtask}
                onTask={onTask}
                text={showtask ? 'Close Task' :  'Input Task'}
            />
        </div>
    )
}
