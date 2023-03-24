import { GlobalState } from '@/redux/interface'
import type { SizeType } from 'antd/lib/config-provider/SizeContext'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 全局状态
const globalState: GlobalState = {
  token: '', // 用户token
  userInfo: '', // 用户信息
  assemblySize: 'middle', // 字体尺寸
  language: '', // 语言类型
  // 主题配置信息
  themeConfig: {
    primary: '#1890ff', // 主题色
    isDark: false, // 是否为暗黑模式
    weakOrGray: '', // 色弱模式(weak) || 灰色模式(gray)
    // 面包屑导航
    breadcrumb: true,
    // 标签页
    tabs: true,
    // 页脚
    footer: true,
  },
}

const globalSlice = createSlice({
  name: 'global',
  initialState: globalState,
  reducers: {
    setToken(state: GlobalState, { payload }: PayloadAction<string>) {
      state.token = payload
    },
    setAssemblySize(state: GlobalState, { payload }: PayloadAction<SizeType>) {
      state.assemblySize = payload
    },
    setLanguage(state: GlobalState, { payload }: PayloadAction<string>) {
      state.language = payload
    },
    setDark(state: GlobalState, { payload }: PayloadAction<boolean>) {
      state.themeConfig.isDark = payload
    },
    setWeakOrGray(state: GlobalState, { payload }: PayloadAction<string>) {
      state.themeConfig.weakOrGray = payload
    },
    setBreadcrumb(state: GlobalState, { payload }: PayloadAction<boolean>) {
      state.themeConfig.breadcrumb = payload
    },
    setTabs(state: GlobalState, { payload }: PayloadAction<boolean>) {
      state.themeConfig.tabs = payload
    },
    setFooter(state: GlobalState, { payload }: PayloadAction<boolean>) {
      state.themeConfig.footer = payload
    },
  },
})

export const { setToken, setAssemblySize, setLanguage, setDark, setWeakOrGray, setBreadcrumb, setTabs, setFooter } =
  globalSlice.actions
export default globalSlice.reducer
