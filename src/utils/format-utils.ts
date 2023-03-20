/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount(count: number) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImage(imgUrl: string, size: number) {
  return `${imgUrl}?param=${size}x${size}`
}

export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function formatTime(time: number) {
  // 1、将毫秒换为秒
  const timeSeconds = time / 1000
  // 2、获取分钟和秒钟
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  // 3、格式化时间
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}

//获取毛玻璃图片
export function getImageBlur(url: string): string {
  if (!url || url.length === 0) return ''
  const imgArr = url.split('==')
  return `https://music.163.com/api/img/blur/${imgArr[1]}`
}

export function isEmptyObject(originObject: object) {
  return !!Object.keys(originObject).length // ！！常常用来做类型判断,undefined、null、空字符串、数值正负0、NaN为false，其他为true
}
