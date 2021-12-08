import React from 'react'

export default function Resettimebtn({onReset}) {
    return (
        <div>
            <button  
                className='btn' 
                style={{backgroundColor : 'black'}}
                onClick={onReset}
            >
            Reset
            </button>
        </div>
    )
}
