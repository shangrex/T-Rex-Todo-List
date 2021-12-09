import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Timer from './components/Timer'
import Inputbar from './components/Inputbar'
import Resettimebtn from './components/Resettimebtn'
import Switchtimebtn from './components/Switchtimebtn'
import pic_rex from './images/t-rex.png'
import trans_pic_rex from './images/trans-t-rex.png'
import Taskbutton from './components/Taskbutton'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'


function App() {
    // Show task
    const [showtask, setshowtask] = useState(false)
    // Timer count
    const [count , setCount] = useState(1500);
    const [coundown, setCountdown] = useState(false);
    const [tasks, settasks] = useState([
        {
            "id": 1,
            "text": "pizza hut dinner",
            "time": "18:30",
        },
    ])

    useEffect(()=>{
        if(coundown === true && count >= 0){
            const timer = setInterval(()=>{
                setCount(count-1);
            }, 1000)
            //Clean up can be done like this
            return () => {
                clearInterval(timer);
            }
        }
    }); 

    const reset_time = ()=>{
        setCount(1500);
        setCountdown(false);
    }

    const switch_time = () => {
        setCountdown(!coundown);
    }

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
                <Header showtask={showtask} onTask={()=>{setshowtask(!showtask)}}/>
                <div className="timer_container">
                    <div className="divider_title"></div>
                    <Timer time_count={count}/>
                    <div className="time_btn">
                        <AiOutlineDoubleLeft className="left_icon"/>
                        <div className="divider"></div>
                        <div className="divider"></div>
                        <div className="divider"></div>
                        <Switchtimebtn onSwitch={switch_time} countdown={coundown}/>
                        <div className="divider"></div>
                        <Resettimebtn onReset={reset_time}/>
                        <div className="divider"></div>
                        <div className="divider"></div>
                        <div className="divider"></div>
                        <AiOutlineDoubleRight className="right_icon"/>
                    </div>
                </div>
                {showtask && <Inputbar onAdd={addtask}/>}
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

export default App;
