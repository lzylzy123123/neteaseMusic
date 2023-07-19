import Cheader from '@/components/changeheaders/Cheader'
import React, { memo } from 'react'
import './index.less'

const Sex = memo(() => {
  return (
    <div>
      <Cheader />
      <div className='body'>
        <div className='gender'>男</div>
        <div className='gender'>女</div>
        <div className='gender'>保密</div>
      </div>
    </div>
  )
})

export default Sex