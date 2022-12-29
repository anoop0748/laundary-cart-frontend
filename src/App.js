import FooterNav from './FooterNavComp/footerNav';
import Navbar from './HeaderComp/navbar';
import LogInForm from './LogInComp/login';
import HomeSection from './SectionOne/home';
import CopyRight from './FooterComp/copyright'
import './App.css'



function App() {

  return (
    <>
      <Navbar/>
      <div id='section1'>
      <div className='a1'> <HomeSection/></div>
     <div className='a1'> <LogInForm/></div>
     </div>
      <FooterNav/>
      <CopyRight/>
    </>
  );
}

export default App;
