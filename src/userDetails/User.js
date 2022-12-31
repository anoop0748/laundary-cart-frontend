import { useEffect, useState } from "react"
import CopyRight from "../FooterComp/copyright"
import Navbar from "../HeaderComp/navbar"
import "./user.css"
import searchphoto from "./search.svg"
let Userdetails = () => {
  const token = window.localStorage.getItem('token');
  const [name, set_name] = useState("");
  let [state, setstate] = useState([])
  useEffect(() => {
    console.log(token)
    fetch("https://laundry-backend-i2fe.onrender.com/successfulLogin", {
      method: "get",
      headers: {
        authorization: token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setstate(data.post[0].orders);
        set_name(data.post[0].name);
      })

  }, [])

  return (
    <>
      {/* <Link to="/userdetails">create</Link> */}


      <Navbar After_Login={true} name={name} />
      <div className="order-header">
        <h3>Orders|0</h3>
        <button style={{alignSelf:"center",padding:"7px 31px 6px 32px",color:"#5861AE"}}>create</button>
        <img  src={searchphoto}/>
        <input type={"search"} className="search-input"/>
      </div>
      <table  className="table">
              <tr className="table-head">
                <th>Order Id</th>


                <th>Order Date & Time</th>

                <th>Store Location</th>

                <th>City</th>

                <th> Store Phone</th>

                <th>Total items</th>

                <th> Price</th>

                <th>status</th>

                <th>View</th>
              </tr>
      </table>
      {state.map((ele, i) => {
        return <>
          <div className="fakers-data" key={i}>
           <table>
              <tr>
                <td>{ele.order_id}</td>
                <td>{ele.orderDate}</td>
                <td>{ele.location}</td>
                <td>{ele.city}</td>
                <td>{ele.phone}</td>
                <td>{ele.total_item}</td>
                <td style={{ color: "#5861AE" }}>{ele.price}</td>
                <td>{ele.status}</td>
                <td><i className="far fa-eye"></i></td>
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
      <CopyRight />
    </>
  )
}

export default Userdetails