import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'

import { discoverMenu } from '@/assets/data/local-data'

interface IProps {
  children?: ReactNode
}
const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="top">
        <div className="item-list">
          {discoverMenu.map((item, index) => {
            return (
              <NavLink className="nav-item" key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            )
          })}
        </div>
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
