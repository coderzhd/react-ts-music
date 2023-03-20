import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hdRequest from '@/service/index'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumsAction,
  fetchRankingListAction
} from './store/index'

import TopBanner from './c-cpns/top-banner'
import { Content, RecommendLeft, RecommendRight } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewSonglist from './c-cpns/new-albums'
import RankingList from './c-cpns/ranking-list'
import UserLogin from './c-cpns/user-login'
import SettledSingers from './c-cpns/settled-singers'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  // 发起获取数据请求
  useEffect(() => {
    // 请求“发现”的轮播图
    dispatch(fetchBannerDataAction())
    // 请求“发现”中的“热门推荐”
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumsAction())
    dispatch(fetchRankingListAction()), []
  })

  return (
    <div>
      <TopBanner></TopBanner>
      <Content className="w980">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewSonglist></NewSonglist>
          <RankingList />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettledSingers />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </div>
  )
}

export default memo(Recommend)
