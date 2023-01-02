import FooterNav from './FooterNavComp/footerNav';
import Navbar from './HeaderComp/navbar';
import LogInForm from './LogInComp/login';
import HomeSection from './SectionOne/home';
import CopyRight from './FooterComp/copyright'

import Order from './Orderpage/Orderpage';
import './index.css'
import SuccessPopUp from './SucessPopUp/popUp';
import SummaryPage from './SummaryPage/summary';
// import Userdetails from './userDetails/User';



function App() {

  return (
    <>

      {/* <Navbar/> */}
      {/* <HomeSection/>
      <LogInForm/> */}
      {/* <FooterNav/>
      <CopyRight/> */}
      {/* <Order></Order> */}
{/* <SuccessPopUp/> */}
      
      {/* <SummaryPage/> */}
      <Navbar />
      <div id='two_section'>
        <HomeSection />

        <LogInForm />
      </div>
      
      <FooterNav />
      <CopyRight />
      

    </>
  );
}

export default App;
