import React from 'react'
import pic_rex from '../images/t-rex.png'

const Background = ()=> {
    return (
        <div style={ background_style }>
        </div>
    )
}

const background_style = {
    backgroundImage: `url(${pic_rex})`
    // ,width:'100%'
    ,height: '100%'
    ,backgroundRepeat: 'no-repeat'
    /* Center and scale the image nicely */
    ,backgroundPosition: 'center'
    ,backgroundSize: 'cover'
    ,width: '100vw'
    ,height: '100vh'
    ,margin: '0'
    ,opacity: '0.5'
}

export default Background
