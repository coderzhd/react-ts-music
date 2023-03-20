import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

import headerTitles from '@/assets/data/header-titles.json'

const showTitleItem = (item: any) => {
  if (item.type == 'path')
    return (
      // 使用NavLink使得选中后能够保持active状态
      <NavLink className="header-item" key={item.title} to={item.path}>
        <em>{item.title}</em>
        <i className="icon sprite_01"></i>
      </NavLink>
    )
  else
    return (
      <a
        className="header-item"
        href={item.path}
        rel="noreferrer"
        target="_blank"
        key={item.title}
      >
        <em>{item.title}</em>
      </a>
    )
}

interface IProps {
  children?: ReactNode
}
const Header: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return showTitleItem(item)
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <Input
              className="header-input"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="header-center">创作者中心</div>
          <div className="header-login">
            <a href="#">登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className="red-devide"></div>
    </HeaderWrapper>
  )
}

export default memo(Header)
