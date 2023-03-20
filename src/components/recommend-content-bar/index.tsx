import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { BarLeft, BarRight, BarWraper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  categorys?: string[]
  moreTitle?: string
  moreLink?: string
}
const RecommendContentBar: FC<IProps> = (props) => {
  const { title, categorys = [], moreTitle, moreLink = '' } = props
  return (
    <BarWraper className="sprite_02">
      <BarLeft>
        <a href="/discover/recommend" className="title no-link hot-text">
          {title}
        </a>

        <ul className="categorys">
          {categorys.map((item) => {
            return (
              <li className="item" key={item}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  {item}
                </a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </BarLeft>
      <BarRight>
        <NavLink className="more" to={moreLink}>
          {moreTitle}
        </NavLink>
        <span className="sprite_02 icon"></span>
      </BarRight>
    </BarWraper>
  )
}

export default memo(RecommendContentBar)
