import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

    return(
        <div class="navbar">         
            <div class="content">          
            
            <Link to="/" class="brand">&nbsp;&nbsp;🔳TODONA</Link>
            &nbsp;&nbsp;&nbsp;<button class="button"><Link to="/create">➕</Link></button>
                <div className="link-page">
                    <Link to="/" >Todo</Link>
                    <Link to="/done">Done</Link>
                    <Link to="/about">About</Link>
                  
                    
                </div>    
            </div>
        </div>
);
    };
export default Navbar;
