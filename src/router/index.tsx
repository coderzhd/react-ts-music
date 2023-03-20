import React, { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

// 实现懒加载,使用React中的lazy函数进行动态import组件，这样所有组件就不会打包到同一个js文件中，减少首屏加载时间
// 同时在使用懒加载组件的父组件外面需要React提供的Suspense进行包裹，防止还未下载完子组件的js文件就进行渲染。
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Singer = lazy(() => import('@/views/discover/c-views/singer'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Djaudio = lazy(() => import('@/views/discover/c-views/djaudio'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    // element是个组件实例
    // <Discover />是jsx语法，因此文件后缀名为tsx
    // 同时应引入react
    element: <Discover />,
    children: [
      {
        path: '/discover',
        // 为什么用双引号：在这里相当于用jsx写法key="value"
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djaudio',
        element: <Djaudio />
      },
      {
        path: '/discover/singer',
        element: <Singer />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
