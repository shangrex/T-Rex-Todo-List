import React from 'react'

export default function Button({color}) {
    return (
        <div className='header'>
            <button  className='btn' style={{backgroundColor : color}}>
                Add
            </button>
        </div>
    )
}
