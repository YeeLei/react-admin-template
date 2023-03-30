import React from 'react'
import lazyLoad from '@/router/utils/lazyLoad'
import { LayoutIndex } from '@/router/constant'
import { RouteObject } from '@/router/interface'

// 常用组件模块
const assemblyRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '常用组件',
    },
    children: [
      {
        path: '/assembly/selectIcon',
        element: lazyLoad(React.lazy(() => import('@/views/assembly/selectIcon/index'))),
        meta: {
          requiresAuth: true,
          title: 'Icon 选择',
          key: 'selectIcon',
        },
      },
      {
        path: '/assembly/batchImport',
        element: lazyLoad(React.lazy(() => import('@/views/assembly/batchImport/index'))),
        meta: {
          requiresAuth: true,
          title: '批量导入数据',
          key: 'batchImport',
        },
      },
      {
        path: '/assembly/svgIcon',
        element: lazyLoad(React.lazy(() => import('@/views/assembly/svgIcon/index'))),
        meta: {
          requiresAuth: true,
          title: 'Svg 图标',
          key: 'svgIcon',
        },
      },
    ],
  },
]

export default assemblyRouter
