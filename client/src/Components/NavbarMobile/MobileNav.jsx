import { Link } from 'react-router-dom'
import { BiCommand } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { TbUsersPlus } from 'react-icons/tb'
import './MobileNav.css'

const MobileNavbar = () => {
  return (
    <div id='Navbar_mobile'>
      <Link className=' navigator_navbar_mobile'>
        <BiCommand />
      </Link>
      <Link className='navigator_navbar_mobile'>
        <IoIosAddCircleOutline />
      </Link>
      <Link className='navigator_navbar_mobile'>
        <FiUser />
      </Link>

      <Link className='navigator_navbar_mobile'>
        <TbUsersPlus />
      </Link>
    </div>
  )
}
export default MobileNavbar
