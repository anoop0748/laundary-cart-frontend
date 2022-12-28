import { Link } from "react-router-dom";
import './home.css'

function HomeSection() {
  return (
    <section className="home">
      <div>
        <h1>Laundry <br /> Service</h1>
      </div>
      <div>
        <p>
          Doorstep Wash & Dryclean Service
        </p>
      </div>
      <div>
        <h6>
          Don`t Have An Account
        </h6>
      </div>
      <div>
        <Link to='/register' ><button>Register</button> </Link>
      </div>
    </section>
  )
}
export default HomeSection;