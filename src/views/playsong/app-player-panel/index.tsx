import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerPanelWrapper } from './style'
import PanelHeader from './c-cpns/panel-header'
import PanelList from './c-cpns/panel-list'
import PanelLyric from './c-cpns/panel-lyric'
import { shallowEqual } from 'react-redux'
import { useAppSeletor } from '@/store'
import { getImageBlur, isEmptyObject } from '@/utils/format-utils'

interface IProps {
  children?: ReactNode
}

const AppPlayerPanel: FC<IProps> = (props) => {
  const { currentSong } = useAppSeletor(
    (state) => ({
      currentSong: state.songplayer.currentSong
    }),
    shallowEqual
  )
  return (
    <AppPlayerPanelWrapper>
      <PanelHeader />
      <div className="panel-content">
        {isEmptyObject(currentSong) && (
          <img
            className="bgImg"
            src={getImageBlur(currentSong?.al?.picUrl)}
            alt=""
          />
        )}
        <PanelList />
        <PanelLyric />
      </div>
    </AppPlayerPanelWrapper>
  )
}

export default memo(AppPlayerPanel)
