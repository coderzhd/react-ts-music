import React, {
  createContext,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { Contorl, Operator, PlayInfo, PlaySongBarWraper } from './style'
import { useAppDispatch } from '@/store'
import { useAppSeletor } from './../../../store/index'
import { formatTime, getPlayUrl, getSizeImage } from '@/utils/format-utils'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction
} from '../store/song-player'
import AppPlayerPanel from '../app-player-panel'

interface IProps {
  children?: ReactNode
}

//定义context
type TSETSTATE = (arg: boolean) => void
type TPLAYERCONTEXT = {
  panelState: boolean
  setPanelState: TSETSTATE
}
export const PlayerContext = createContext<TPLAYERCONTEXT | null>(null)

const PlaySongBar: FC<IProps> = () => {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false) // 判断是否播放
  const [progress, setProgress] = useState(0) // 滑块进度
  const [currentTime, setCurrentTime] = useState(0) // 保存当前播放的时间
  const [isChanging, setIsChanging] = useState(false) // 是否正在滑动的标志位
  const [showPanel, setShowPanel] = useState<boolean>(false) //是否显示panel面板

  const { currentSong, lyrics, lyricIndex, playMode, currentSongList } =
    useAppSeletor((state) => ({
      currentSong: state.songplayer.currentSong,
      lyrics: state.songplayer.lyrics,
      lyricIndex: state.songplayer.lyricIndex,
      playMode: state.songplayer.playMode,
      currentSongList: state.songplayer.currentSongList
    }))

  // other handle
  const picUrl = currentSong.al && currentSong.al.picUrl // 图片url
  const songName = currentSong.name // 歌曲名字
  const singerName = currentSong.ar && currentSong.ar[0].name //作者名字
  const duration = currentSong.dt //播放总时间
  const songUrl = getPlayUrl(currentSong.id) // 歌曲URL

  const audioRef = useRef<HTMLAudioElement>(null)

  // 加载音乐
  useEffect(() => {
    audioRef.current!.src = getPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true)
        audioRef.current!.volume = 0.1
      })
      .catch((err) => {
        setIsPlaying(false)
      })
    // setDuration(currentSong.dt)
  }, [currentSong])

  const dispatch = useAppDispatch()

  // 点击播放按钮开启/暂停音乐
  const play = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play()
  }, [isPlaying])

  // audio的时间改变时触发
  function timeUpdate(e: any) {
    // 1、获取当前的播放时间
    const currentTime = e.target.currentTime * 1000

    // 2、计算当前的歌曲进度（条件：非拖动滑块时）
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress((currentTime / duration) * 100)
    }

    // 3、根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time > currentTime) {
        index = i - 1
        break
      }
    }
    if (index !== lyricIndex) {
      dispatch(changeLyricIndexAction(index))
      console.log(lyrics[index].text)
    }
  }

  // 拖动滑块时触发
  const sliderChange = useCallback(
    (value: number) => {
      // 滑动滑块时:更改标识变量isChanging为true,避免与audio的时间改变时冲突
      setIsChanging(true)
      // duration与currentTime单位都是毫秒
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      // 更改进度条值
      setProgress(value)
    },
    [duration]
  )

  // 手指抬起时触发
  const slideAfterChange = useCallback(
    (value: number) => {
      // 重新设置当前播放时长 value(进度)/100 * duration(总毫秒数) / 1000 得到当前播放的"秒数"
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current!.currentTime = currentTime // !. 的意思是断言，告诉 ts 该对象里一定有某个值

      // 设置当前播放时间的state,设置的是'毫秒',所以需要*1000
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)
    },
    [duration, audioRef]
  )

  // 切换播放模式
  function changePlayMode() {
    const newPlayMode = playMode + 1 > 2 ? 0 : playMode + 1
    dispatch(changePlayModeAction(newPlayMode))
  }

  // 上一曲、下一曲
  function changeNextSong(isNext: boolean) {
    dispatch(changeMusicAction(isNext))
  }

  // 播完歌曲后自动切换
  function audioEnded() {
    //如果是单曲循环仍然播放这一首或歌曲播放列表被清空
    if (playMode === 2 || !currentSongList.length) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play().catch((e) => {
        audioRef.current?.pause()
      })
    } else {
      //播放下一首
      changeNextSong(true)
    }
  }

  return (
    <PlaySongBarWraper className="sprite_player">
      <div className="content w980">
        <Contorl isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={() => changeNextSong(false)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => play()}
          ></button>
          <button
            className="sprite_player next"
            onClick={() => changeNextSong(false)}
          ></button>
        </Contorl>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                defaultValue={0}
                value={progress}
                tooltip={{ open: false }}
                onChange={sliderChange}
                onAfterChange={slideAfterChange}
              />
              <div className="time">
                <span className="now-time">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator playMode={playMode}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={() => changePlayMode()}
            ></button>
            <button
              className="sprite_player btn playlist"
              onClick={() => setShowPanel(!showPanel)}
            ></button>
          </div>
        </Operator>
      </div>
      <audio
        id="audio"
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={audioEnded}
        preload="auto"
      />
      <PlayerContext.Provider
        value={{ panelState: showPanel, setPanelState: setShowPanel }}
      >
        {showPanel && <AppPlayerPanel />}
      </PlayerContext.Provider>
    </PlaySongBarWraper>
  )
}

export default memo(PlaySongBar)
