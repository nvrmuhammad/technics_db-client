import { Routes, Route } from 'react-router-dom'
import LoginAdmin from '../Components/LoginAdmin/LoginAdmin'
import LoginUser from '../Components/LoginUser/LoginUser'
import UserPanel from '../Layouts/UserPanel/UserPanel'
import AdminPanel from '../Layouts/AdminPanel/AdminPanel'
import { ProtectRouterAdmin, ProtectRouterUser } from '../utils/ProtectRouter'
import AdminUserPanel from '../Layouts/AdminUserPanel/AdminUserPanel'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectRouterAdmin />}>
          <Route path='/admin/dashboard' element={<AdminPanel />} />
          <Route path='/admin/products' element={<AdminPanel />} />
          <Route path='/admin/users' element={<AdminUserPanel />} />
        </Route>

        <Route element={<ProtectRouterUser />}>
          <Route path='/user/products' element={<UserPanel />} />
        </Route>

        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/user/login' element={<LoginUser />} />
        <Route path='/' element={<LoginUser />} />
        {/* <Route path='/admin/products' element={<UserPanel />} /> */}
      </Routes>
    </>
  )
}
export default Routing
