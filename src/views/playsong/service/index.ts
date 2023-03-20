import hdRequest from '@/service'

export function getSongDetial(ids: number) {
  return hdRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return hdRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
