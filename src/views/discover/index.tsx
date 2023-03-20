import React, { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

export default function Discover() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 用于在父路由元素中作为子路由的占位元素 */}
        <Outlet />
      </Suspense>
    </div>
  )
}
