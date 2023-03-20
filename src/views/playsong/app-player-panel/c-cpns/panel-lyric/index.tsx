import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelLyricWrapper } from './style'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { useAppSeletor } from '@/store'

interface IProps {
  children?: ReactNode
}

const PanelLyric: FC<IProps> = (props) => {
  const { lyric, lyricsItemIndex } = useAppSeletor(
    (state) => ({
      lyric: state.songplayer.lyrics,
      lyricsItemIndex: state.songplayer.lyricIndex
    }),
    shallowEqual
  )

  const panelLyricRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lyricsItemIndex === -1) return
    //父元素可视区域距离
    const clientDistance = panelLyricRef.current!.clientHeight
    //需要移动的子元素
    const childrenElement = panelLyricRef.current!.children[lyricsItemIndex]
    //子元素高度
    const childrenElementHeight = childrenElement!.clientHeight
    //子元素距离顶部距离
    const childrenElementTop = (childrenElement as HTMLDivElement).offsetTop
    console.log(childrenElementTop)
    //子元素需要滚动距离
    const distance =
      childrenElementHeight * 0.5 + childrenElementTop - clientDistance * 0.5
    // 一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。
    // 可以理解为内容位置不动，可视窗口自上而下滑动
    panelLyricRef.current!.scrollTop = distance
  }, [lyricsItemIndex])

  return (
    <PanelLyricWrapper ref={panelLyricRef}>
      {lyric.map(({ time, text }, index) => {
        return (
          <div
            className={classNames('lyricItem', {
              activeLyricItem: lyricsItemIndex === index
            })}
            key={time}
          >
            {text}
          </div>
        )
      })}
    </PanelLyricWrapper>
  )
}

export default memo(PanelLyric)
