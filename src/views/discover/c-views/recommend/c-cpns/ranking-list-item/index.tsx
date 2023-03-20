import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListItemWraper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { fetchSongDetialAction } from '@/views/playsong/store/song-player'
import { useAppDispatch } from './../../../../../../store/index'

interface IProps {
  children?: ReactNode
  info: any
  className: string
}

const RankingListItem: FC<IProps> = (props) => {
  const { info } = props

  const dispatch = useAppDispatch()

  function playMusic(id: number) {
    dispatch(fetchSongDetialAction(id))
  }

  return (
    <RankingListItemWraper>
      <div className="item-header">
        <div className="header-left">
          <img
            className="item-img"
            src={getSizeImage(info.coverImgUrl, 80)}
            alt={info.name}
          />
          <a href="#" className="msk image_cover" title={info.name}></a>
        </div>
        <div className="header-right">
          <div className="item-name">
            <span>{info.name}</span>
          </div>
          <div className="item-oper">
            <a
              href="/discover/recommend"
              className="c-wh sprite_02 text-indent play"
            >
              播放
            </a>
            <a
              href="/discover/recommend"
              className="c-wh sprite_02 text-indent favourite"
            >
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="item-content">
        {info &&
          info.tracks &&
          info.tracks.length > 0 &&
          info.tracks.slice(0, 10).map((item: any, index: number) => {
            return (
              <div key={item.id} className="list-item">
                <div className="number">{index + 1}</div>
                <a
                  href="/play"
                  className="song-name text-nowrap"
                  onClick={(e) => {
                    e.preventDefault()
                    playMusic(item.id)
                  }}
                >
                  {item.name}
                </a>
                <div className="oper">
                  <button
                    className="sprite_02 btn play"
                    onClick={(e) => {
                      playMusic(item.id)
                    }}
                  ></button>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn addto"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log('添加收藏')
                    }}
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favourite">
                    {item.name}
                  </a>
                </div>
              </div>
            )
          })}
      </div>
      <div className="item-footer">
        <a
          href="/discover/ranking"
          className="show-all"
          onClick={(e) => {
            e.preventDefault()
            console.log('跳转到对应排行榜页面')
          }}
        >
          查看全部&gt;
        </a>
      </div>
    </RankingListItemWraper>
  )
}

export default memo(RankingListItem)
