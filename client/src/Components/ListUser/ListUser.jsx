import axios from 'axios'
import './ListUser.css'
import { MdOutlineDelete } from 'react-icons/md'
import { toast } from 'react-toastify'
const ListUser = ({ data }) => {
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

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/user/${id}`, {
        headers: {
          Authorization: localStorage.getItem('admin'),
        },
      })

      if (response.data.data) {
        notifySuccess('Foydalanuvchi muvaffaqiyatli o`chirildi')
      }
    } catch (error) {
      validateError(error.response.data.error)
    }
  }

  const handleDeleteUser = (id) => {
    deleteUser(id)
  }

  return (
    <>
      <div className='tbody_table'>
        <p>{data.full_name}</p>
        <p>{data.login}</p>
        <p>{data.admin_id.full_name}</p>
        <p>
          <button onClick={() => handleDeleteUser(data._id)}>
            <MdOutlineDelete />
          </button>
        </p>
      </div>
    </>
  )
}
export default ListUser
