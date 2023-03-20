import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
  info?: any
  size?: number
  width?: number
  bgp?: string
}
const AlbumsItem: FC<IProps> = (props) => {
  // 传递该组件: width height  做默认值
  // 对图片使用工具函数限制大小
  const { info, size = 130, width = 153, bgp = '-845px' } = props
  return (
    <AlbumCoverWrapper width={width} bgp={bgp} size={size}>
      <div className="album-image image_cover cover">
        <a href="/discover/recommend">
          <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        </a>
      </div>
      <div className="album-name text-nowrap">{info.name}</div>
      <div className="artist text-nowrap">{info.artist.name}</div>
    </AlbumCoverWrapper>
  )
}

export default memo(AlbumsItem)
