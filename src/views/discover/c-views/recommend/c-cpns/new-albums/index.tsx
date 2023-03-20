import React, { ElementRef, memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import { NewAlbumsWraper } from './style'
import RecommendContentBar from '@/components/recommend-content-bar'
import { useAppDispatch } from '@/store'
import { useAppSeletor } from '../../../../../../store/index'
import { shallowEqual } from 'react-redux'
import AlbumsItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
}
const NewSongList: FC<IProps> = () => {
  // redux hook
  const { newAlbums } = useAppSeletor(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )

  //  other hook
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)

  return (
    <NewAlbumsWraper>
      <RecommendContentBar
        title="新碟上架"
        moreTitle="更多"
        moreLink="/discover/album"
      />
      <div className="content">
        <div className="inner">
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map((item) => {
              return (
                <div className="test" key={item}>
                  <div className="page">
                    {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                    {newAlbums &&
                      newAlbums.slice(item * 5, (item + 1) * 5).map((cItem) => {
                        return (
                          <AlbumsItem
                            key={cItem.id}
                            info={cItem}
                            size={100}
                            width={118}
                            bgp="-570px"
                          >
                            {cItem.name}
                          </AlbumsItem>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-left"
          onClick={(e) => albumRef.current?.prev()}
        ></div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={(e) => albumRef.current?.next()}
        ></div>
      </div>
    </NewAlbumsWraper>
  )
}

export default memo(NewSongList)
