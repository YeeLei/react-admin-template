import { Drawer, Divider, Switch } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'
import { setBreadcrumb, setDark, setFooter, setTabs, setWeakOrGray } from '@/redux/modules/global'
import { updateCollapse } from '@/redux/modules/menu'
import { RootState } from '@/redux'
import { ThemeConfigProp } from '@/redux/interface'

const Theme = () => {
  const dispatch = useDispatch()
  const isCollapse = useSelector<RootState>((state) => state.menu.isCollapse) as boolean
  const themeConfig = useSelector<RootState>((state) => state.global.themeConfig) as ThemeConfigProp
  const { weakOrGray, isDark, breadcrumb, tabs, footer } = themeConfig

  const [visible, setVisible] = useState<boolean>(false)
  const changeSetWeakOrGray = (checked: boolean, theme: string) => {
    if (checked) {
      dispatch(setWeakOrGray(theme))
      return
    }
  }

  return (
    <>
      <i
        className="icon-style iconfont icon-zhuti"
        onClick={() => {
          setVisible(true)
        }}
      ></i>
      <Drawer
        title="布局设置"
        closable={false}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        width={320}
      >
        {/* 全局主题 */}
        <Divider className="divider">
          <FireOutlined />
          全局主题
        </Divider>
        <div className="theme-item">
          <span>暗黑模式</span>
          <Switch
            className="dark"
            defaultChecked={isDark}
            checkedChildren={<>🌞</>}
            unCheckedChildren={<>🌜</>}
            onChange={(e) => {
              dispatch(setDark(e))
            }}
          />
        </div>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch
            checked={weakOrGray === 'gray'}
            onChange={(e) => {
              changeSetWeakOrGray(e, 'gray')
            }}
          />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch
            checked={weakOrGray === 'weak'}
            onChange={(e) => {
              changeSetWeakOrGray(e, 'weak')
            }}
          />
        </div>
        <br />
        {/* 界面设置 */}
        <Divider className="divider">
          <SettingOutlined />
          界面设置
        </Divider>
        <div className="theme-item">
          <span>折叠菜单</span>
          <Switch
            checked={isCollapse}
            onChange={(e) => {
              dispatch(updateCollapse(e))
            }}
          />
        </div>
        <div className="theme-item">
          <span>面包屑导航</span>
          <Switch
            checked={breadcrumb}
            onChange={(e) => {
              dispatch(setBreadcrumb(e))
            }}
          />
        </div>
        <div className="theme-item">
          <span>标签栏</span>
          <Switch
            checked={tabs}
            onChange={(e) => {
              dispatch(setTabs(e))
            }}
          />
        </div>
        <div className="theme-item">
          <span>页脚</span>
          <Switch
            checked={footer}
            onChange={(e) => {
              dispatch(setFooter(e))
            }}
          />
        </div>
      </Drawer>
    </>
  )
}

export default Theme
