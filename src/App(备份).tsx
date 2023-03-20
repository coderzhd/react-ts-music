import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSeletor, useAppDispatch, shallowEqualApp } from './store/index'
import routes from './router'
import { changeMessage } from './store/modules/counter'

export default function App() {
  // useAppSeletor获取想要的state数据
  const { count, message } = useAppSeletor(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    // 使用shallowEqual进行优化,在组件决定是否被渲染之前,会进行一次浅层对比如果该组件依赖的state并没有被更改,就不会进行渲染
    shallowEqualApp
  )

  // useAppDispatch用来获取 dispatch 函数
  const dispatch = useAppDispatch()
  function handlechangeMessage() {
    dispatch(changeMessage('哈哈哈'))
  }
  return (
    <div className="App">
      <div className="Nav">
        <Link to="/discover">发现</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div>
        <h2>当前计数：{count}</h2>
        <h2>当前Message:{message}</h2>
        <button onClick={handlechangeMessage}>改变消息</button>
      </div>
      {/* 如果我们对某些组件进行了异步加载（懒加载），那么需要使用Suspense进行包裹 */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mine">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}
