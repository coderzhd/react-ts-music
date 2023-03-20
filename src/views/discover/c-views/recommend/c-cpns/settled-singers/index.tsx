import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSeletor } from './../../../../../../store/index'
import { SettledSingersWraper } from './style'
import SingerAnchorBar from '../singer-anchor-bar'
import { getSizeImage } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
}
const SettledSingers: FC<IProps> = () => {
  const { sttledSingerList } = useAppSeletor((state) => ({
    sttledSingerList: state.recommend.settledSingerList
  }))
  return (
    <SettledSingersWraper>
      <SingerAnchorBar
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="/discover/singer"
      />
      <div className="singer-list">
        {sttledSingerList &&
          sttledSingerList.length > 0 &&
          sttledSingerList.map((item) => {
            return (
              <div key={item.id} className="singer-item">
                <img
                  className="item-img"
                  src={getSizeImage(item.img1v1Url, 62)}
                  alt="歌手图片"
                />
                <div className="item-info">
                  <span className="singer-name">{item.name}</span>
                  <span className="singer-info text-nowrap">
                    {item.alias[0]}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
      <a className="sprite_button s-footer">
        <i className="sprite_button s-footer-i">申请成为网易音乐人</i>
      </a>
    </SettledSingersWraper>
  )
}

export default memo(SettledSingers)
