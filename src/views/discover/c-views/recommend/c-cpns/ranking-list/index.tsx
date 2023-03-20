import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListWraper } from './style'
import RecommendContentBar from '@/components/recommend-content-bar'
import { useAppSeletor } from './../../../../../../store/index'
import RankingListItem from '../ranking-list-item'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}
const RankingList: FC<IProps> = () => {
  const { rankinglists = [] } = useAppSeletor(
    (state) => ({
      rankinglists: state.recommend.rankingLists
    }),
    shallowEqual
  )
  return (
    <RankingListWraper>
      <RecommendContentBar
        title="榜单"
        moreTitle="更多"
        moreLink="/discover/playlist"
      />
      <div className="ranking-content">
        {rankinglists.map((item, index) => {
          return (
            <RankingListItem className="ranking-item" key={index} info={item} />
          )
        })}
      </div>
    </RankingListWraper>
  )
}

export default memo(RankingList)
