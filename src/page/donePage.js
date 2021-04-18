import React, { useEffect } from "react";
import axios from "axios";

const DonePage = () => {
    const [done, setDone] = React.useState([])
  
    function fetchDoneTask(){
        axios.get("https://backend-kueakun.herokuapp.com/api/tasks?isFinished=true").then((res)=> setDone(res.data))
    }
    
    function onUpdate(id, isFinished){
        axios.put(`https://backend-kueakun.herokuapp.com/api/task?id=${id}`,{ 
            isFinished: isFinished,
        }).then(()=> {
            
            fetchDoneTask()
        })
    }
    function onDelete(id){
        axios.delete(`https://backend-kueakun.herokuapp.com/api/task/${id}`).then(()=>{
            
            fetchDoneTask()
        })
    }

    useEffect(() => {
        fetchDoneTask()
    }, []);

    return(
    
        <div>
            
            <div class="content2">
            <div><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>Done</h1></div>
            <ul>
                {done.map((task) => <li class="card">
                    <span><b>{task.taskName} </b></span>
                    <br/>
                    <span>{task.timeDate} </span>
                    <span>{task.time} </span>
                    <button  class="button2" onClick={()=>onDelete(task._id)}>❌</button>
                    <button  class="button1" onClick={()=>onUpdate(task._id, false)}>↩</button>
                    
                </li>)}
            </ul>           
        </div>
        </div>
    
    )
}
export default DonePage;