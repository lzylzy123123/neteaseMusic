import React, { memo } from 'react'
import MeHeader from '@/components/me-cpn/me-header'
import MeBody from '@/components/me-cpn/me-body'
const Me = memo(() => {
  return (
    <div>
        <MeHeader></MeHeader>
        <MeBody></MeBody>
    </div>
  )
})

export default Me