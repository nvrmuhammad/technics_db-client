import { Link, useNavigate } from 'react-router-dom'
import './LoginUser.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const LoginUser = () => {
  const [data, setData] = useState([])
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validateError = (msg) => {
    toast.error(msg, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  const fetching = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        login,
        password,
      })

      const loginData = response.data
      if (loginData) {
        localStorage.setItem('user', loginData.data)
        navigate('/user/products')
        notifySuccess('Muvaffaqiyatli hisobga kirildi')
        setData(loginData)
      }
    } catch (error) {
      validateError(error.response.data.error)
    }
  }

  const handleLoginUser = (e) => {
    e.preventDefault()
    fetching()
  }
  return (
    <div id='Login_user'>
      <form className='form_login_user'>
        <input
          onChange={(e) => setLogin(e.target.value)}
          className='login_user_input'
          type='number'
          placeholder='login'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='login_user_input'
          type='text'
          placeholder='parol'
        />
        <button
          onClick={(e) => handleLoginUser(e)}
          className='login_user_input login_user_btn'
        >
          Kirish
        </button>
        <Link to='/admin/login' className='to_admin_login'>
          Admin Login
        </Link>
      </form>
    </div>
  )
}
export default LoginUser
