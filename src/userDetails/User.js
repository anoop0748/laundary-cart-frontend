import { useEffect, useState } from "react"
import CopyRight from "../FooterComp/copyright"
import Navbar from "../HeaderComp/navbar"
import "./user.css"
import searchphoto from "./mag.svg"
import userhome from "../logo/home.png"
import usermore from "../logo/more.png"
import userlist from "../logo/list@2x.png"
import { Link } from "react-router-dom"
import SummaryPage from "../SummaryPage/summary"
import Cancal from "../cancalorderpopup/cancal"
// import Orderpagesidebar from "../Orderpage/Orderpagesidebar"
let Userdetails = (props) => {
  const token = window.localStorage.getItem('token');
  const [name, set_name] = useState("");
  let [state, setstate] = useState([])
  let [sum,setsum]=useState(false)
  let [can,setcan]=useState(false)
 
  function ca(){
    setcan(true)
    setsum(false)
  }
  function summary_page(){
    console.log("ok")
    setsum(true)
       
  }
  // console.log(props.updatecancal);
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
      { can?<Cancal setcan={setcan} />:""}
      {sum?<SummaryPage orderstatus={true} cancalorder={ca}/>:""}
      {props.updatecancal?<Cancal/>:""}
      <Navbar After_Login={true} name={name} />
        {/* <Orderpagesidebar/> */}
      <div className="order-header">
        <h3 style={{marginLeft:"101px"}}>Orders|0</h3>
        <Link to="/Cardorder"><button style={{alignSelf:"center",padding:"7px 28px 6px 29px",color:"#5861AE",marginTop:"15px"}}>create</button></Link>
        <img  src={searchphoto} style={{width:"20px",alignSelf:"center"}}/>
        <input type={"search"} className="search-input"/>
      </div>
         <table  className="table-head" style={{backgroundColor:"black",color:"white"}}>
              <tr>
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
      <div className="user-sidebar">
       <div><img  src={userhome} /></div>
       <div><img  src={usermore} /></div>
       <div><img  src={userlist} /></div>
      {state.map((ele, i) => {
        return <>
          <div  key={i}>
           <table className="data-table">
              <tr>
                <td>{ele.order_id}</td>
                <td>{ele.orderDate}</td>
                <td>{ele.location}</td>
                <td>{ele.city}</td>
                <td>{ele.phone}</td>
                <td>{ele.total_item}</td>
                <td style={{ color: "#5861AE" }}>{ele.price}</td>
                <td>{ele.status }</td>
                <td><i className="far fa-eye" onClick={()=>{summary_page()}}></i></td>
              </tr>
            </table>
           

          </div>
        
        </>
      })}
      </div>
      {/* <Orderpagesidebar/> */}
      
      <CopyRight />
    </>
  )
}

export default Userdetails