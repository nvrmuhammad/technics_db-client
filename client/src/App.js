import './App.css'
import MobileLogo from './Components/MobileLogo/MobileLogo'
import Navbar from './Components/Navbar/Navbar'
import MobileNavbar from './Components/NavbarMobile/MobileNav'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MobileLogo />
      <MobileNavbar />
    </div>
  )
}

export default App
