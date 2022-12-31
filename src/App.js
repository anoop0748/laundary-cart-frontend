import FooterNav from './FooterNavComp/footerNav';
import Navbar from './HeaderComp/navbar';
import LogInForm from './LogInComp/login';
import HomeSection from './SectionOne/home';
import CopyRight from './FooterComp/copyright'
import './index.css'
import SuccessPopUp from './SucessPopUp/popUp';
// import Userdetails from './userDetails/User';


function App() {

  return (
    <>
      {/* <SuccessPopUp/> */}
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
