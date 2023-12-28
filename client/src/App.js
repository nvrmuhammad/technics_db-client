import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import LoginAdmin from './Components/LoginAdmin/LoginAdmin'
import LoginUser from './Components/LoginUser/LoginUser'
import MobileLogo from './Components/MobileLogo/MobileLogo'
import Navbar from './Components/Navbar/Navbar'
import MobileNavbar from './Components/NavbarMobile/MobileNav'
import Routing from './Routes/Routing'
import Product from './Components/Product/Product'

function App() {
  return (
    <>
      <div className='App'>
        {/* <Navbar />
      <MobileLogo />
      <MobileNavbar /> */}
        {/* <LoginUser /> */}
        {/* <LoginAdmin /> */}
        <Routing />
      </div>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default App
