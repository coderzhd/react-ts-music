import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const PlaySong: FC<IProps> = () => {
  return <div>PlaySong</div>
}

export default memo(PlaySong)
