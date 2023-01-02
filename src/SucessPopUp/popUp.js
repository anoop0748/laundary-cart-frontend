
import './popUo.css'

function SuccessPopUp(){
    return (
        <>
            <div className="outer_cont">
                <div id='massage_cont'>
                    <div id='conten_cont'>
                    <img src='./projecIimages/sucessfulllogo.jpg' alt='success logo' />
                    <h6>Your order is successfully.</h6>
                    <p>You can track the delivery in the "Orders" section.</p>
                    <button>Go to orders</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SuccessPopUp