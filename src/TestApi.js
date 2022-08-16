import React from "react";
import axios from "axios"

const TestApi = ()=> {
    const [todo, setTodo] = React.useState([])
    

    React.useEffect(()=>{
        fetchTodoTask()
    }, [])

    function fetchTodoTask(){
        axios.get("https://backend-kueakun.herokuapp.com/api/tasks?isFinished=false").then((res)=> setTodo(res.data))
    }


    function onUpdate(id, isFinished){
        axios.put(`https://backend-kueakun.herokuapp.com/api/task?id=${id}`,{ 
            isFinished: isFinished,
        }).then(()=> {
            fetchTodoTask()
            
        })
    }

    function onDelete(id){
        axios.delete(`https://backend-kueakun.herokuapp.com/api/task/${id}`).then(()=>{
            fetchTodoTask()
            
        })
    }

    return(
    
    <div>
       
        <div class="content2">
            <div><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>Todo</h1></div>
            <ul>
                {todo.map((task) => <li class="card">
                    <span><b>{task.taskName} </b></span>
                    <br/>
                    <span>{task.timeDate} </span>
                    <span>{task.time} </span>
                    <button  class="button2" onClick={()=>onDelete(task._id)}>❌</button>
                    <button  class="button1" onClick={()=>onUpdate(task._id, true)}>✔</button>
                    
                </li>)}
            </ul>           
        </div>
    </div>
    
    )
}

export default TestApi;