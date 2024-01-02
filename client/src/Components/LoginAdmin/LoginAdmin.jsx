import { Link, Navigate, useNavigate } from 'react-router-dom'
import './LoginAdmin.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginAdmin = () => {
  const [data, setData] = useState([])
  const [email, setEmail] = useState('')
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
      const response = await axios.post('http://localhost:4000/admin/login', {
        email,
        password,
      })
      const loginData = response.data
      if (loginData) {
        localStorage.setItem('admin', loginData.data)
        navigate('/admin/dashboard')
        notifySuccess('Muvaffaqiyatli hisobga kirildi')
        setData(loginData)
      }
    } catch (error) {
      validateError(error.response.data.error)
    }
  }

  const handleLoginAdmin = (e) => {
    e.preventDefault()
    fetching()
  }

  return (
    <div id='Login_user'>
      <form className='form_login_user'>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className='login_user_input'
          type='text'
          placeholder='email'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='login_user_input'
          type='text'
          placeholder='parol'
        />
        <button
          onClick={(e) => handleLoginAdmin(e)}
          className='login_user_input login_user_btn'
        >
          Kirish
        </button>
        <Link to='/user/login' className='to_admin_login'>
          Foydalanuvchi Login
        </Link>
      </form>
    </div>
  )
}
export default LoginAdmin
