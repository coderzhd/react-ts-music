import React, { Suspense, useEffect } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSeletor, useAppDispatch, shallowEqualApp } from './store/index'
import routes from './router'
import 'antd/dist/reset.css'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import PalySongBar from './views/playsong/paly-song-bar'
import { fetchSongDetialAction } from './views/playsong/store/song-player'

export default function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSongDetialAction(167876)), []
  })
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <PalySongBar />
    </div>
  )
}
