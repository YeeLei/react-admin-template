import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { setAuthButtons } from '@/redux/modules/auth'
import { updateCollapse } from '@/redux/modules/menu'
import { getAuthorButtons } from '@/api/modules/login'
import { RootState, useDispatch, useSelector } from '@/redux'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import LayoutTabs from './components/Tabs'
import LayoutFooter from './components/Footer'
import './index.less'
import { ThemeConfigProp } from '@/redux/interface'

const LayoutIndex = () => {
  const dispatch = useDispatch()
  const { isCollapse } = useSelector((state: RootState) => state.menu)
  const { tabs, footer } = useSelector((state) => state.global.themeConfig) as ThemeConfigProp
  const { Sider, Content } = Layout

  // 获取按钮权限列表
  const getAuthButtonsList = async () => {
    const { data } = await getAuthorButtons()
    dispatch(setAuthButtons(data!))
  }

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth
        if (!isCollapse && screenWidth < 1200) dispatch(updateCollapse(true))
        if (!isCollapse && screenWidth > 1200) dispatch(updateCollapse(false))
      })()
    }
  }

  useEffect(() => {
    listeningWindow()
    getAuthButtonsList()
  }, [])

  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <section className="container">
      <Sider trigger={null} collapsed={isCollapse} width={220} theme="dark">
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        {tabs && <LayoutTabs></LayoutTabs>}
        <Content>
          <div className="content">
            <Outlet></Outlet>
          </div>
          {/* TransitionGroup 会导致 useEffect 加载两次 && 使用路由懒加载第一次进入没有动画，所以暂时不用过渡动画了 */}
          {/* <TransitionGroup className="content"> */}
          {/* exit：表示退出当前页面的时候是否有动画 */}
          {/* <CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}> */}

          {/* </CSSTransition> */}
          {/* </TransitionGroup> */}
        </Content>
        {footer && <LayoutFooter></LayoutFooter>}
      </Layout>
    </section>
  )
}

export default LayoutIndex
