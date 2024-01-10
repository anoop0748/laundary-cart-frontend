import React, { useEffect, useState } from "react";
import './navbar.css'


function Navbar (props){
    const After_Login = props.After_Login;
    const user_name = props.name;
    let [deviceWidth,setDeviceWidth] = useState(window.innerWidth);
    const [changMenu,setMainMenu] = useState(true)
    useEffect(()=>{
        setDeviceWidth(window.innerWidth)
    },[window.innerWidth])
   

    
    function logout_user(){
        
        props.spin(true)
        window.localStorage.clear("token");
        
              // Force a reload if the user has logged out.
              window.location.href = '/';
            //   window.location.reload();
              
    }
    function switch_menu(){
        if(changMenu) setMainMenu(false);
        else{setMainMenu(true)}
    }
    return(
        <div className="header_nav">
            <div id="logo_name">LAUNDRY</div>
            <div className="nav_links">
                {
                (deviceWidth <= 600)?
                <>
                    <div className={`main_menu_container ${!changMenu?"change":""}`} onClick={()=>{switch_menu()} }>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </>
                :""}
                <style></style>
                <ul>
                    {After_Login?"":<li>Home</li>}
                    <li>Pricing</li>
                    <li>Career</li>
                    {After_Login?<li>{user_name}</li>:<li>Sign In</li>}
                    {After_Login?<li onClick={logout_user}>Log Out</li>:""}

                </ul>
            </div>
        </div>
    )
}


export default Navbar