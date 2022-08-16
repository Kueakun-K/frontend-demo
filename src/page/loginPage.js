import React from "react";
import {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"


const Login = ({ setLoginUser}) => {
    const history = useHistory()
    
    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    function onlogin(){
        axios.post("https://backend-kueakun.herokuapp.com/api/login", user)
        .then(res=> {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return (
      
            
        <div>
            <div class="content2">
            <div><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>login</h1></div>
                <ul>
                    <li class="card">
                    <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange}></input>
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}></input>
                        
                    <button  class="button1" onClick={()=> onlogin()}>✔</button>
                    </li>
                </ul>

        </div>
        </div>
       
           )
        }
        export default Login;