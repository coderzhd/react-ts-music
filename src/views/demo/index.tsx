import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
}
// 表示Download是一个React.FC（函数式组件），同时指明props的类型（IProps）
const Download: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  )
}

export default memo(Download)
