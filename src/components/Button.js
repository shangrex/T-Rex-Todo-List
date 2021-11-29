import React from 'react'

export default function Button({color, text, onTask}) {
    return (
        <div className='header'>
            <button  
                className='btn' 
                style={{backgroundColor : color}}
                onClick={onTask}
            >
            {text}
            </button>
        </div>
    )
}
