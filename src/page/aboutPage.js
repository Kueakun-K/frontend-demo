import React from "react";
import cat from "../img/cat.jpg"

const AboutPage = () => {
    return (
        <div class="content2" >
            <div style={{display: "flex"}}><h1 style={{ fontSize: "56px",marginLeft: "50px" }}>About Me</h1></div>
            <ul>
                <li style={{display: "flex"}}>
            <img src={cat} alt="Cat" ></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontSize: "38px", marginBottom: "20px"}}>"แมวเหมียวว"</span>
            </li>
            </ul>
        </div>

    );
};
    
    export default AboutPage;