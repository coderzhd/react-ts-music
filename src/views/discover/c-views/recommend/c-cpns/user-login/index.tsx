import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWraper } from './style'

interface IProps {
  children?: ReactNode
}
const handleLogin = () => {
  // 判断是否登录
  console.log('用户登录')
}
const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWraper>
      <div className="sprite_02 login-content ">
        <p className="login-text">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <button className="sprite_02 login-btn" onClick={() => handleLogin()}>
          用户登录
        </button>
      </div>
    </UserLoginWraper>
  )
}

export default memo(UserLogin)
