import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Djaudio: FC<IProps> = () => {
  return <div>Djaudio</div>
}

export default memo(Djaudio)
