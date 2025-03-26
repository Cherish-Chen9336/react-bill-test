import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      {/* 二级路由出口 */}
      <Outlet />
      我是layout
    </div>
  )
}

export default Layout
