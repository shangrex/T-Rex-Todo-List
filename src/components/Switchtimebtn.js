import React from 'react'

export default function Switchtimebtn({onSwitch}) {
    return (
        <div>
        <button  
            className='btn' 
            style={{backgroundColor : 'black'}}
            onClick={onSwitch}
        >
        Start
        </button>
        </div>
    )
}
