/*
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:02.000] 编曲 : 许嵩
[00:03.000] 制作人 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
 */

export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[([0-9]{2}):([0-9]{2})\.([0-9]{2,3})\]/
export function praseLyric(lyric: string): ILyric[] | undefined {
  if (!lyric) return
  const lyricLines = lyric.split('\n')
  const lyricList: ILyric[] = []
  for (const line of lyricLines) {
    if (line) {
      // 匹配结果
      const result = timeRegExp.exec(line)
      if (!result) continue

      // 获取每一组的时间
      const time1 = Number(result[1]) * 60 * 1000
      const time2 = Number(result[2]) * 1000
      const time3 =
        result[3].length === 2 ? Number(result[3]) * 10 : Number(result[3])
      const time = time1 + time2 + time3

      // 获取每一组的文本
      const text = line.replace(timeRegExp, '')

      // 放入lyricList中
      lyricList.push({ time, text })
    }
  }
  return lyricList
}
