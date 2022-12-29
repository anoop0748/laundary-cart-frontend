import React from "react";
import './navbar.css'

function Navbar (){
    return(
        <div className="header">
            <div id="logo_name">LAUNDRY</div>
            <div className="nav_links">
                <style></style>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Career</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar