import React from 'react'
import { useState, useEffect } from 'react'

export default function Inputbar({onAdd}) {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');

    const onSubmit = (e)=>{
        // Not refresh the web
        e.preventDefault()

        if(!text){
            alert("text must not be empry");
            return
        }
        
        onAdd({text, time});
        
        setText('');
        setTime('');
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' 
                    placeholder='Input task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input 
                    type='text' 
                    value={time}
                    placeholder='Input deadline time'
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <input type='submit' value='Save Task'
                className='btn btn-block' 
            />
        </form>
    )
}
