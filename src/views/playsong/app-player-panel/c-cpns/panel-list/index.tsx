import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { PanelListWrapper, EmptyShowWrapper } from './style'
import { useAppDispatch, useAppSeletor } from '@/store'
import {
  changeCurrentSongListAction,
  fetchSongDetialAction
} from '@/views/playsong/store/song-player'
import { formatTime } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
}

const PanelList: FC<IProps> = (props) => {
  const { currentList = [], currentSong } = useAppSeletor(
    (state) => ({
      currentList: state.songplayer.currentSongList,
      currentSong: state.songplayer.currentSong
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  //播放歌曲
  const listItemPlay = (id: number) => {
    dispatch(fetchSongDetialAction(id))
  }

  //删除歌曲列表单首歌曲
  const deleteSongList = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    itemid: number
  ) => {
    e.stopPropagation() // 防止click事件进一步传递给父元素，导致触发listItemPlay
    const newCurrentList = currentList.filter((item) => item.id !== itemid)
    dispatch(changeCurrentSongListAction(newCurrentList))
  }

  function listItemContent() {
    return currentList.map(({ id, name, ar: [{ name: arName = '' }], dt }) => {
      return (
        <div
          className={classNames('listItem', {
            activePlay: currentSong.id === id
          })}
          key={id}
          onClick={(e) => listItemPlay(id)}
        >
          <div className={classNames('sprite_playlist', 'playIcon')}></div>
          <div className="musicTitle">{name}</div>
          <div className="iconBox">
            <div title="收藏" className="sprite_playlist icon addIcon"></div>
            <div title="分享" className="sprite_playlist icon shareIcon"></div>
            <div
              title="下载"
              className="sprite_playlist icon downloadIcon"
            ></div>
            <div
              title="删除"
              className="sprite_playlist icon deleteIcon"
              onClick={(e) => deleteSongList(e, id)}
            ></div>
          </div>

          <div className="text musicAuthor text-nowrap" title={arName}>
            {arName}
          </div>
          <div className="text musicTime">{formatTime(dt)}</div>
          <div className="sprite_playlist linkIcon"></div>
        </div>
      )
    })
  }

  function emptyContent() {
    return (
      <EmptyShowWrapper>
        <div className="emptyIconBox">
          <i className="sprite_playlist emptyIcon"></i>
          你还没有添加任何歌曲
        </div>
        <div className="emptyTip">
          去首页<a href="#">发现音乐</a>，或在<a href="#">我的音乐</a>
          收听自己收藏的歌单
        </div>
      </EmptyShowWrapper>
    )
  }

  return (
    <PanelListWrapper>
      {currentList.length ? listItemContent() : emptyContent()}
    </PanelListWrapper>
  )
}

export default memo(PanelList)
