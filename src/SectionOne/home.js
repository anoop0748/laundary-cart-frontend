import { Link } from "react-router-dom";


function HomeSection(props){
   
  return (
    <section className="home" style={props.change_login?{width:"42%"}:{}}>
      <div>
        <h1>Laundry <br /> Service</h1>
      </div>
      <div>
        <p></p>
          <h5>
          Doorstep Wash & Dryclean Service
        </h5>
        <h6>
          {props.change_login?"Alredy Have Account":'Don`t Have An Account'}
        </h6>

        <Link to='/register' ><button>Register</button> </Link>     
        </div>
      </section>
      
  )
}
export default HomeSection;