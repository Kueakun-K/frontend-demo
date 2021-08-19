import React from "react";
// import {useHistory} from "react-router-dom"
import axios from "axios"

const LoginPage = () => {
    // const history = useHistory()
    const [createInput1, setCreateInput1] = React.useState("")
    const [createInput2, setCreateInput2] = React.useState("")

    function onCreate(){
        axios.post("https://backend-kueakun.herokuapp.com/api/login", {
            User: createInput1,
            Password: createInput2,
        }).then(()=> {
            setCreateInput1("")
            setCreateInput2("")
            // history.push("/")
        })
    }
    return (
      
            
        <div>
            <div class="content2">
            <div><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>Create</h1></div>
                <ul>
                    <li class="card">
                        <input type="text" placeholder="Username" value={createInput1} onChange={(e)=> {
                            setCreateInput1(e.target.value)
                        }}/><br/>
                        <input type="text" placeholder="Password" value={createInput2} onChange={(e)=> {
                            setCreateInput2(e.target.value)
                        }}/><br/>
                        
                        <button  class="button1" onClick={()=> onCreate()}>✔</button>
                    </li>
                </ul>

        </div>
        </div>
       
           )
        }
        export default LoginPage;