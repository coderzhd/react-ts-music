import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerAnchorBarWraper } from './style'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  moreLink?: string
}
const SingerAnchorBar: FC<IProps> = (props) => {
  const { title, moreText = '', moreLink = '' } = props
  return (
    <SingerAnchorBarWraper>
      <div className="left">{title}</div>
      <NavLink className="right" to={moreLink}>
        {moreText}
      </NavLink>
    </SingerAnchorBarWraper>
  )
}

export default memo(SingerAnchorBar)
