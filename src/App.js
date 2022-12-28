import FooterNav from './FooterNavComp/footerNav';
import Navbar from './HeaderComp/navbar';
import LogInForm from './LogInComp/login';
import HomeSection from './SectionOne/home';
import CopyRight from './FooterComp/copyright'



function App() {

  return (
    <>
      <Navbar/>
      <HomeSection/>
      <LogInForm/>
      <FooterNav/>
      <CopyRight/>
    </>
  );
}

export default App;
