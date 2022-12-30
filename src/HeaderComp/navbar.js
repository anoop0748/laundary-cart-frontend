import React from "react";
import './navbar.css'

function Navbar (props){
    const After_Login = props.After_Login;
    const user_name = props.name
    return(
        <div className="header_nav">
            <div id="logo_name">LAUNDRY</div>
            <div className="nav_links">
                <ul>
                    {After_Login?"":<li>Home</li>}
                    <li>Pricing</li>
                    <li>Career</li>
                    {After_Login?<li>{user_name}</li>:<li>Sign In</li>}
                </ul>
            </div>
        </div>
    )
}


export default Navbar