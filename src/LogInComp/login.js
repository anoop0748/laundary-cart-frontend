import axios from 'axios';
import { useState } from 'react';
import './login.css'

const Url = "http://localhost:5000/login"



function LogInForm(){
    const [user_name, setUser_name] = useState("");
    const [user_password, setUser_password] = useState("");
    function userId(e){
      let id = e.target.value;
      if(id === Number){
        let phoneno = /^\d{10}$/;
        if(id.match(phoneno)){
          
        }
      }
      setUser_name()
    }
    async function logIn(e){
      e.preventDefault();
      const data = {
        email : user_name,
        password : user_password
      }
      console.log(data)
      let response = await axios.post(Url,data);
      console.log(response.json())
  
    }



    return(
        <div id='login'>
          <div id='loginsection'>
          <h3>SIGN IN</h3>
        <div id='input1'>
        <input type="text" placeholder="Mobile/Email" onBlur={userId}/>
        </div>
       <div id='input2'>
       <input type="password" placeholder="Password" onBlur={(e)=>setUser_password(e.target.value)}/>
       </div>
        <h5>Forget Password?</h5>
        <button onClick={logIn}>Sign In</button>
          </div>
      </div>
      
    )
}

export default LogInForm;