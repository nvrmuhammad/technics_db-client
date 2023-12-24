import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='Navbar_pc'>
      <div className='logo_navbar_pc'>
        <p className='logotip_logo'>Yamin ideal market <span className='dot_span'>©</span></p>
      </div>

      <div className='navigators_navbar_pc'>
        <Link className='navigator_navbar_pc'>Mahsulotlar</Link>
        <Link className='navigator_navbar_pc'>Foydalanuvchilar</Link>
        <Link className='navigator_navbar_pc'>Mahsulot qo'shish</Link>
        <Link className='navigator_navbar_pc'>Foydalanuvchi qo'shish</Link>
      </div>
    </div>
  )
}
export default Navbar
