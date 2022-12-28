import { useRef } from "react";
import axios  from 'axios'


const Url = "http://localhost:5000/register"
function RegisterPage(){
    const form_data = useRef();
    async function Reg_User(e){
        e.preventDefault()
        const  data = {
            name:form_data.current.name.value,
            email:form_data.current.email.value,
            phone:form_data.current.phone.value,
            state:form_data.current.state.value,
            district:form_data.current.district.value,
            address:form_data.current.address.value,
            pincode:form_data.current.pincode.value,
            password:form_data.current.password.value
        }
        const response = await axios.post(Url,data)
        console.log(response)
    }
    return(
        <form ref={form_data}>
            <input type="text" placeholder="Name" id="name"/>
            <input type="email" placeholder="Email"id="email"/>
            <input type="tel" placeholder="Phone" id="phone"/>
            <input type="text" placeholder="State" id="state"/>
            <input type="text" placeholder="District" id="district"/>
            <input type="text" placeholder="Address" id="address"/>
            <input type="text" placeholder="Pincode" id="pincode"/>
            <input type="password" placeholder="Password" id="password"/>
            <button onClick={Reg_User}>Register</button>
        </form>
    )
}

export default RegisterPage;