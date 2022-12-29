import { Link } from "react-router-dom";

function HomeSection(){
    return (
        <section>
        <h1>Laundry Service</h1>
        <h5>
          Doorstep Wash & Dryclean Service
        </h5>
        <h6>
          Don`t Have An Account
        </h6>
        <Link to='/register' ><button>Register</button> </Link>     
      </section>
    )
}
export default HomeSection;