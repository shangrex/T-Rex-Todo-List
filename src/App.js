import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Inputbar from './components/Inputbar'
import pic_rex from './images/t-rex.png'
import trans_pic_rex from './images/trans-t-rex.png'

function App() {
    const [tasks, settasks] = useState([
        {
            "id": 1,
            "text": "pizza hut dinner",
            "time": "11:30",
        },
        {
            "id": 2,
            "text": "jserv hw3",
            "time": "7:30",
        }
    ])

    const addtask = (task)=>{
        console.log("Adding task")
		const id = Math.floor(Math.random()*10000)+1
        const newTask = {id, ...task}
        settasks([...tasks, newTask])
        console.log(tasks)
    }

    const deletetask = (id)=>{
        console.log("delete", id)
        settasks(tasks.filter((task)=>task.id !== id))
    }

    return (
        <div style={background_style}>
            <div className='container'>
                <Header/>
                <Tasks tasks={tasks} onDelete={deletetask}/>
                <Inputbar onAdd={addtask}/>
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

export default App;
