import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CopyRight from "../FooterComp/copyright"
import Navbar from "../HeaderComp/navbar"
import "./user.css"
let Userdetails = () => {
  const token = window.localStorage.getItem('token');
  const [name, set_name] = useState("");
  let [state, setstate] = useState([])
  useEffect(() => {
  if(!token){
    window.location ='/';
  }

    fetch("https://laundry-backend-i2fe.onrender.com/successfulLogin", {
      method: "get",
      headers: {
        authorization: token
      }
    })
      .then((res) => res.json())
      .then((data) => {
         setstate(data.post[0].orders);
         set_name(data.post[0].name);
         })

  }, [])

  return (
    <>
      {/* <Link to="/userdetails">create</Link> */}
      <Navbar After_Login={true} name={name}/>
      <div className="header" >
        <table border={1} className="table">
          <tr>
            <th>Order Id</th>


            <th>Order Date & Time</th>

            <th>Order Id</th>

            <th>Store Location</th>

            <th>City</th>

            <th> Store Phone</th>

            <th>items</th>

            <th> Price</th>

            <th>status</th>

            <th>View</th>
          </tr>
        </table>
      </div>


      {state.map((ele, i) => {
        return <>
          <div className="fakers-data" key={i}>
            <table border={1} className="table-row">
              <tr>
                <td>{ele.order_id}</td>
                <td>{ele.orderdate}</td>
                <td>{ele.location}</td>
                <td>{ele.city}</td>
                <td>{ele.phone}</td>
                <td>{ele.total_items}</td>
                <td style={{color: "#5861AE"}}>{ele.price}</td>
                <td>{ele.status}</td>
                <td><i class="far fa-eye" className="icon"></i></td>
              </tr>
            </table>
            {/* {<h3>{ele.order_id}</h3>}
            {<h3>{ele.orderdate}</h3>}
            {<h3>{ele.location}</h3>}
            {<h3>{ele.city}</h3>}
            {<h3>{ele.phone}</h3>}
            {<h3>{ele.total_items}</h3>}
            {<h3>{ele.price}</h3>}
            {<h3>{ele.status}</h3>} */}

          </div>
        </>
      })}
      <CopyRight/>
    </>
  )
}

export default Userdetails