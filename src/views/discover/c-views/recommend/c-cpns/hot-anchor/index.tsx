import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWraper } from './style'
import SingerAnchorBar from '../singer-anchor-bar'
import { hotAnchors } from '@/assets/data/local-data'
import { getSizeImage } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
}
const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWraper>
      <SingerAnchorBar title="热门主播" />
      <div className="anchor-list">
        {hotAnchors &&
          hotAnchors.map((item) => {
            return (
              <div className="anchor-item" key={item.name}>
                <img
                  className="anchor-img"
                  src={getSizeImage(item.picUrl, 40)}
                  alt="主播图片"
                />
                <div className="anchor-intro">
                  <div className="anchor-h anchor-name">{item.name}</div>
                  <div className="anchor-h anchor-info text-nowrap">
                    {item.position}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </HotAnchorWraper>
  )
}

export default memo(HotAnchor)
