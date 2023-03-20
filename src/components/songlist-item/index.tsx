import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SonglistItemWraper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
  info?: any
  songList?: any
  width?: number
  className?: string
}
const SongListItem: FC<IProps> = (props) => {
  const { info, songList, width = 140 } = props
  // pic
  const picUrl = info && info.picUrl
  // playCount 播放次数
  const playCount =
    (info && info.playCount) || (songList && songList.playCount) || 0
  // name
  const name = (info && info.name) || (songList && songList.name)
  // nickname
  // id
  const songInfoId = (info && info.id) || (songList && songList.id)

  return (
    <SonglistItemWraper
      width={width}
      href={`#/songlist?songlistId=${songInfoId}`}
    >
      <div className="cover-wrapper">
        <img src={getSizeImage(picUrl, 140)} alt="" />
        <div className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon earphone"></i>
              {getCount(playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-title text-nowrap">{name}</div>
      {/* <div className="cover-source text-nowrap">
        by {(info && info.copywriter) || nickname}
      </div> */}
    </SonglistItemWraper>
  )
}

export default memo(SongListItem)
