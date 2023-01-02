
import Orderpagenav from './Orderpagenav'
import Orderpagesidebar from './Orderpagesidebar'
import './Orderpage.css'
import Order from './Createorderpage/Order'
import { Link } from 'react-router-dom'
function Orderpage(){
    return(
        <div>
            <Orderpagenav></Orderpagenav>
            <span> order</span>
            <span id='inputsearch'> <span><img src={require('../logo/search.jpg')}  id='simg' ></img></span><input></input></span>
            <div className='op'>
            <Orderpagesidebar></Orderpagesidebar>
            </div >
            <div  className='op' id='sec'>
                <div style={{'width':'25%','height':'25%','textAlign':'center'}}>
                  <span>  No order available</span>
                  <div>


               <Link to='/CreateOrder'> <button  style={{'backgroundColor':'red'}} >Create</button></Link>
               <Link to='/Cardorder'> <button  style={{'backgroundColor':'red'}} >Create</button></Link>

                  </div>
                </div>
                </div> 
        </div>
    )
}


export default Orderpage
