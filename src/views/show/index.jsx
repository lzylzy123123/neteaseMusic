import Cheader from '@/components/changeheaders/Cheader'
import React, { memo } from 'react'
import './index.less'

const Show = memo(() => {
  return (
    <div>
      <Cheader title='修改简介' right='保存' />
      <textarea name="" id="" cols="40" rows="10"></textarea>
    </div>
  )
})

export default Show