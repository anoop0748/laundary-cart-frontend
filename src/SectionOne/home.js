import { Link } from "react-router-dom";
import './home.css'
function HomeSection(){
    return (
        <section id="main">
        <h1 id="h1">Laundry  <br></br>Service</h1>
        <h5 id="h5">
          Doorstep Wash & Dryclean Service
        </h5>
        <h6 id="h6">
          Don`t Have An Account
        </h6>
        <Link to='/register' ><button id="register">Register</button> </Link>     
      </section>
    )
}
export default HomeSection;