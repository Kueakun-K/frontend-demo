import React from "react";
import {useHistory} from "react-router-dom"
import axios from "axios"

const CreatePage = () => {
    const history = useHistory()
    const [createInput, setCreateInput] = React.useState("")
    const [createTime1, setCreateTime1] = React.useState("")
    const [createTime2, setCreateTime2] = React.useState("")

    function onCreate(){
        axios.post("https://backend-kueakun.herokuapp.com/api/task", {
            taskName: createInput,
            timeDate: createTime1,
            time: createTime2,
        }).then(()=> {
            setCreateTime1("")
            setCreateTime2("")
            setCreateInput("")
            history.push("/")
        })
    }
    return (
      
            
        <div>
            <div class="content2">
            <div><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>Create</h1></div>
                <ul>
                    <li class="card">
                        <input type="text" placeholder="Todo..." value={createInput} onChange={(e)=> {
                            setCreateInput(e.target.value)
                        }}/><br/>
                        <input type="Date" value={createTime1} onChange={(e)=> setCreateTime1(e.target.value)}/>
                        <input value={createTime2} type="time" onChange={(e)=> setCreateTime2(e.target.value)}/>
                        <button  class="button1" onClick={()=> onCreate()}>✔</button>
                    </li>
                </ul>

        </div>
        </div>
       
           )
        }
        export default CreatePage;