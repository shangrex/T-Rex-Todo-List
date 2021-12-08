import React from 'react'
import { useState, useEffect } from "react";

export default function Timer({time_count}) {
   
    return (
        <div className="timer">
            <p>{(time_count-time_count%60)/60}:{time_count%60}</p>            
        </div>
    )
}
