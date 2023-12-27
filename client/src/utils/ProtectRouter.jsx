export const ProtectRouterAdmin = () => {
  let authToken = localStorage.getItem('admin')
  return authToken ? <Outlet /> : window.location.assign('/admin/login')
}
