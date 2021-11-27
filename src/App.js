import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import pic_rex from './images/t-rex.png'
import trans_pic_rex from './images/trans-t-rex.png'

function App() {
    const [tasks, settasks] = useState([
        {
            "text": "pizza hut dinner",
            "time": "11:30",
            "reminder": false,
            "id": 1
        },
        {
            "text": "jserv hw3",
            "time": "7:30",
            "reminder": true,
            "id": 2
        }
    ])

    const deletetask = (id)=>{
        console.log(id)
        settasks(tasks.filter((task)=>task.id !== id))
    }

    return (
        <div style={background_style}>
            <div className='container'>
                <Header/>
                <Tasks tasks={tasks} onDelete={deletetask}/>
            </div>
        </div>
    );
}


const background_style = {
    backgroundImage: `url(${trans_pic_rex})`
    // ,width:'100%'
    ,backgroundRepeat: 'no-repeat'
    /* Center and scale the image nicely */
    ,backgroundSize: 'cover'
    ,width: '100vw'
    ,height: '150vh'
    ,margin: '0'
    // ,opacity: 0.3
    // ,backgroundColor: 'rgba(255, 255, 255, 0.9)'
}

const head_style = {
    height: '100%'
    ,margin: '0'
    ,font: '400 15px/1.8 "Lato", sans-serif'
    ,color: '#777'
}

export default App;
