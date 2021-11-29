import React from 'react'
import Button from './Button'

export default function Header({showtask, onTask}) {
    return (
        <div className='header'>
            <h1>T-Rex-Todo-List</h1>
            <Button 
                color={'black'}
                showtask={showtask}
                onTask={onTask}
                text={showtask ? 'Close Task' :  'Input Task'}
            />
        </div>
    )
}
