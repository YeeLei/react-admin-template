import { RootState, useSelector } from '@/redux'
import defaultTheme from '@/styles/theme/theme-default.less'
import darkTheme from '@/styles/theme/theme-dark.less'
/**
 * @description 全局主题设置
 * */
const useTheme = () => {
  const { weakOrGray, isDark } = useSelector((state: RootState) => state.global.themeConfig)
  const initTheme = () => {
    const body = document.documentElement as HTMLElement
    if (!weakOrGray) body.setAttribute('style', '')
    if (weakOrGray === 'weak') body.setAttribute('style', 'filter: invert(80%)')
    if (weakOrGray === 'gray') body.setAttribute('style', 'filter: grayscale(1)')

    // 切换暗黑模式
    let head = document.getElementsByTagName('head')[0]
    const getStyle = head.getElementsByTagName('style')
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {
        if (getStyle[i]?.getAttribute('data-type') === 'dark') getStyle[i].remove()
      }
    }
    let styleDom = document.createElement('style')
    styleDom.dataset.type = 'dark'
    styleDom.innerHTML = isDark ? darkTheme : defaultTheme
    head.appendChild(styleDom)
  }

  initTheme()

  return {
    initTheme,
  }
}

export default useTheme
