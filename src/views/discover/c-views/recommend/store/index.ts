import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getRankingList } from '../service'
import { getNewSongList } from './../service/index'
export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannerAction(res.banners))
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotrecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumsAction = createAsyncThunk(
  'newalbums',
  async (arg, { dispatch }) => {
    const res = await getNewSongList()
    dispatch(changeNewAlbumsAction(res.albums))
  }
)

const rangingListMap = new Map()
rangingListMap.set('飙升榜', 19723756)
rangingListMap.set('新歌榜', 3779629)
rangingListMap.set('原创榜', 2884035)
export const fetchRankingListAction = createAsyncThunk(
  'rankinglist',
  async (arg, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rangingListMap.values()) {
      promises.push(getRankingList(id))
    }
    Promise.all(promises).then((res) => {
      const rankinglists = res.map((item) => item.playlist)
      console.log(rankinglists)
      dispatch(changeRankingDataAction(rankinglists))
    })
  }
)

// 入驻歌手数据无对应API，官网也是写死的
const settledSingerList = [
  {
    name: '薛之谦',
    id: 5781,
    picId: 109951165034938860,
    img1v1Id: 109951165034950660,
    briefDesc: '',
    picUrl:
      'https://p2.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg',
    img1v1Url:
      'https://p2.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg',
    albumSize: 19,
    alias: ['Joker Xue', 'Jacky Xue'],
    trans: '',
    musicSize: 257,
    topicPerson: 106622,
    lastRank: 0,
    score: 62671262,
    picId_str: '109951165034938865',
    img1v1Id_str: '109951165034950656'
  },
  {
    name: '陈奕迅',
    id: 2116,
    picId: 109951166115915090,
    img1v1Id: 109951166115911710,
    briefDesc: '',
    picUrl:
      'https://p2.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg',
    img1v1Url:
      'https://p2.music.126.net/rYYhHXZHwCfizE0N46F37Q==/109951166115911716.jpg',
    albumSize: 126,
    alias: ['Eason Chan', 'Chan Yick Shun'],
    trans: '',
    musicSize: 1837,
    topicPerson: 21737,
    lastRank: 1,
    score: 62357080,
    picId_str: '109951166115915081',
    img1v1Id_str: '109951166115911716'
  },
  {
    name: '林俊杰',
    id: 3684,
    picId: 109951167878710660,
    img1v1Id: 109951167878713400,
    briefDesc: '',
    picUrl:
      'https://p2.music.126.net/7636PzUiFMETHU7SAr05FA==/109951167878710661.jpg',
    img1v1Url:
      'https://p2.music.126.net/thrEGQSfLQp0Kd6M5yBEEg==/109951167878713410.jpg',
    albumSize: 59,
    alias: ['JJ Lin', 'Wayne Lim'],
    trans: '',
    musicSize: 358,
    topicPerson: 31302,
    lastRank: 2,
    score: 62073213,
    picId_str: '109951167878710661',
    img1v1Id_str: '109951167878713410'
  },
  {
    name: 'G.E.M.邓紫棋',
    id: 7763,
    picId: 109951167773880640,
    img1v1Id: 109951167771736530,
    briefDesc: '',
    picUrl:
      'https://p2.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg',
    img1v1Url:
      'https://p2.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg',
    albumSize: 52,
    alias: ['G.E.M.'],
    trans: '',
    musicSize: 371,
    topicPerson: 13113,
    lastRank: 3,
    score: 61966296,
    picId_str: '109951167773880633',
    img1v1Id_str: '109951167771736533'
  },
  {
    name: '告五人',
    id: 12676697,
    picId: 109951166497731340,
    img1v1Id: 109951167433999710,
    briefDesc: '',
    picUrl:
      'https://p2.music.126.net/CZQqBzVxVRTvAeJFuAmpug==/109951166497731343.jpg',
    img1v1Url:
      'https://p2.music.126.net/sFAifnpKoWw0vNihjBJ-ZQ==/109951167433999712.jpg',
    albumSize: 21,
    alias: ['Accusefive'],
    trans: '',
    musicSize: 53,
    topicPerson: 1047,
    lastRank: 4,
    score: 59366986,
    picId_str: '109951166497731343',
    img1v1Id_str: '109951167433999712'
  }
]

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  rankingLists: any[]
  settledSingerList: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  rankingLists: [],
  settledSingerList
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingDataAction(state, { payload }) {
      state.rankingLists = payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingDataAction
} = recommendSlice.actions
export default recommendSlice.reducer
