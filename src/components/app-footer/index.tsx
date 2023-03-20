import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}
const Footer: FC<IProps> = () => {
  return (
    <div>
      Footer
      <Button type="primary">Button</Button>
    </div>
  )
}

export default memo(Footer)
