import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWraper } from './style'
import RecommendContentBar from '@/components/recommend-content-bar'
import { useAppSeletor } from './../../../../../../store/index'
import { useAppDispatch } from '@/store'
import { fetchHotRecommendAction } from '../../store'
import { shallowEqual } from 'react-redux'
import SonglistItem from '@/components/songlist-item'

interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSeletor(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  )

  return (
    <HotRecommendWraper>
      <RecommendContentBar
        title="热门推荐"
        categorys={['华语', '流行', '摇滚', '民谣', '电子']}
        moreTitle="更多"
        moreLink="/discover/playlist"
      ></RecommendContentBar>
      <div className="recommend-list">
        {hotRecommend &&
          hotRecommend.map((item) => {
            return (
              <SonglistItem
                key={item.id}
                info={item}
                className="recommend-list"
              >
                {item.name}
              </SonglistItem>
            )
          })}
      </div>
    </HotRecommendWraper>
  )
}

export default memo(HotRecommend)
