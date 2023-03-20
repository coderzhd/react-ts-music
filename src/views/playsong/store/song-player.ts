import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetial, getSongLyric } from './../service/index'
import { ILyric, praseLyric } from './../../../utils/prase-lyric'
import { IRootState } from '@/store'

export const fetchSongDetialAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('songdetial', (id, { dispatch, getState }) => {
  // 1、获取歌曲数据

  // 不能直接发送网络请求
  // getSongDetial(167876).then((res) => {
  //   const song = res.songs && res.songs[0]
  //   if (!song) return
  //   dispatch(changeCurrentSongAction(song))
  // })

  // 准备播一首歌时分为两种情况：在播放列表中（放入播放列表）、不在播放列表中（从列表中取出）
  // 获取列表数据，待播歌曲是否在列表中
  const currentSongList = getState().songplayer.currentSongList
  const findIndex = currentSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 未在列表中，则进行网络请求并存入列表
    getSongDetial(id).then((res) => {
      const song = res.songs && res.songs[0]
      if (!song) return
      // 更新列表
      const newPlaySongList = [...currentSongList]
      newPlaySongList.push(song)
      // 更新currentSong、currentSongList、currentSongListIndex
      dispatch(changeCurrentSongAction(song))
      dispatch(changeCurrentSongListAction(newPlaySongList))
      dispatch(changeCurrentSongIndexAction(newPlaySongList.length - 1))
    })
  } else {
    // 在列表中，则直接取出，并更新currentSong、currentSongListIndex
    const song = currentSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changeCurrentSongIndexAction(findIndex))
  }

  // 2、获取歌词数据
  getSongLyric(id).then((res) => {
    // 对歌词进行解析
    const lyric = praseLyric(res.lrc.lyric)
    dispatch(changeLyricsAction(lyric))
  })
})

// 切换下一首
export const changeMusicAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>('changemusic', (isNext, { dispatch, getState }) => {
  // 1、获取state中的数据
  const songplayer = getState().songplayer
  const playMode = songplayer.playMode
  const currentList = songplayer.currentSongList
  const currentListIndex = songplayer.currentSongIndex

  // 2、根据不同的播放模式计算下一首歌的索引
  let newIndex = currentListIndex
  if (playMode === 1) {
    // 随机播放
    newIndex = Math.floor(Math.random() * currentList.length)
  } else {
    // 单曲循环或者顺序播放，都是下一首
    newIndex = isNext ? newIndex + 1 : newIndex - 1
    if (newIndex < 0) newIndex = currentList.length - 1
    if (newIndex > currentList.length - 1) newIndex = 0
  }
  // 3、获取当前的歌曲
  const song = currentList[newIndex]
  dispatch(changeCurrentSongAction(song))
  dispatch(changeCurrentSongIndexAction(newIndex))

  // 4、更改歌词
  getSongLyric(song.id).then((res) => {
    // 对歌词进行解析
    const lyric = praseLyric(res.lrc.lyric)
    dispatch(changeLyricsAction(lyric))
  })
})

interface IState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  // 使用列表和索引来进行歌曲切换
  currentSongIndex: number
  currentSongList: any[]
  playMode: number
}

const initialState: IState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  currentSongList: [
    {
      name: '梦里花',
      id: 2005574298,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 35136304,
          name: '卢卢快闭嘴',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 156431025,
        name: '梦里花',
        picUrl:
          'https://p1.music.126.net/RdMHRLZwtbCg-N23TLGHVA==/109951168141737066.jpg',
        tns: [],
        pic_str: '109951168141737066',
        pic: 109951168141737070
      },
      dt: 206273,
      h: {
        br: 320000,
        fid: 0,
        size: 8253165,
        vd: -58626,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4951917,
        vd: -56025,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3301293,
        vd: -54354,
        sr: 48000
      },
      sq: {
        br: 941004,
        fid: 0,
        size: 24263096,
        vd: -57822,
        sr: 48000
      },
      hr: {
        br: 1706277,
        fid: 0,
        size: 43995070,
        vd: -58623,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 327090,
        name: '梦里花',
        artists: [
          {
            id: 10562,
            name: '张韶涵'
          }
        ],
        albumMeta: {
          id: 32361,
          name: '梦里花'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 1670860800000,
      tns: ['唯一纯白的茉莉花']
    },
    {
      name: '雨天·2022',
      id: 2004349260,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36181946,
          name: '不是花火呀',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 3,
      crbt: null,
      cf: '',
      al: {
        id: 156014665,
        name: '雨天',
        picUrl:
          'https://p2.music.126.net/B1NngmaTA9RFvCqjN70vBw==/109951168125876900.jpg',
        tns: [],
        pic_str: '109951168125876900',
        pic: 109951168125876900
      },
      dt: 200419,
      h: {
        br: 320000,
        fid: 0,
        size: 8019636,
        vd: -52560,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4811799,
        vd: -49935,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3207880,
        vd: -48206,
        sr: 44100
      },
      sq: {
        br: 845018,
        fid: 0,
        size: 21169757,
        vd: -52702,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 287083,
        name: '雨天',
        artists: [
          {
            id: 9272,
            name: '孙燕姿'
          }
        ],
        albumMeta: {
          id: 28521,
          name: 'My Story,Your Song 经典全记录'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1670428800000
    }
  ],
  currentSongIndex: -1,
  playMode: 0 //0:顺序播放 1：随机播放 2：单曲循环
}

const songPlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changeCurrentSongListAction(state, { payload }) {
      state.currentSongList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changeCurrentSongListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction
} = songPlayerSlice.actions

export default songPlayerSlice.reducer
