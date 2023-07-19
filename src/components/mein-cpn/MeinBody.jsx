import React, { memo } from 'react'
import './meinbody.less'
import { useState, useEffect } from 'react'
import { getUser } from '@/services/modules/users'
const MeinBody = memo((props) => {
    const { children } = props;
    return (
        <div className='meinbody' style={{ height: props.height }}>
            <div className='title'>{props.title}</div>
            <div className='child'>
                {children}
            </div>
        </div>
    )
})

export default MeinBody