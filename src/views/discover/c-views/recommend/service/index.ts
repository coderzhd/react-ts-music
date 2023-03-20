import hdRequest from '@/service'

export function getBanner() {
  return hdRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit: number) {
  return hdRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewSongList() {
  return hdRequest.get({
    url: '/album/newest'
  })
}

export function getRankingList(id: number) {
  return hdRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
