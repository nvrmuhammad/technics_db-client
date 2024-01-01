import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null)

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId)
  }

  return (
    <div id='Navbar_pc'>
      <div className='logo_navbar_pc'>
        <p className='logotip_logo'>
          Yamin ideal market <span className='dot_span'>©</span>
        </p>
      </div>

      <div className='navigators_navbar_pc'>
        <Link
          to={'/admin/products'}
          onClick={(e) => handleLinkClick(1)}
          // className='navigator_navbar_pc'
          className={
            activeLink === 1
              ? 'active_navbar_desktop navigator_navbar_pc'
              : 'navigator_navbar_pc'
          }
        >
          Mahsulotlar
        </Link>
        <Link
          to={'/admin/users'}
          onClick={(e) => handleLinkClick(2)}
          className={
            activeLink === 2
              ? 'active_navbar_desktop navigator_navbar_pc'
              : 'navigator_navbar_pc'
          }
        >
          Foydalanuvchilar
        </Link>
        <Link
          onClick={(e) => handleLinkClick(3)}
          className={
            activeLink === 3
              ? 'active_navbar_desktop navigator_navbar_pc'
              : 'navigator_navbar_pc'
          }
        >
          Mahsulot qo'shish
        </Link>

        <Link
          onClick={(e) => handleLinkClick(5)}
          className={
            activeLink === 5
              ? 'active_navbar_desktop navigator_navbar_pc'
              : 'navigator_navbar_pc'
          }
        >
          Hamkorlar
        </Link>
      </div>
    </div>
  )
}
export default Navbar
