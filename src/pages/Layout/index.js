import { Button } from 'antd-mobile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getBillList } from '@/store/modules/billStore'

const Layout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])
  return (
    <div>
      {/* 二级路由出口 */}
      <Outlet />
      我是layout
      {/* 测试全局生效样式 */}
      <Button color="primary">测试全局</Button>
      <div className="purple">
        <Button color="primary">测试全局</Button>
      </div>
    </div>
  )
}

export default Layout
