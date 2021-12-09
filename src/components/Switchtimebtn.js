import React from 'react'

export default function Switchtimebtn({onSwitch, countdown}) {
    return (
        <div>
        <button  
            className='btn_switch' 
            style={{backgroundColor : 'black'}}
            onClick={onSwitch}
        >
        {countdown ? 'Stop ' : 'Start'}
        </button>
        </div>
    )
}
