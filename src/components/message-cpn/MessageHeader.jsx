import React, { memo } from 'react'
import "./MessageHeader.less"
import { Link } from 'react-router-dom'
const MessageHeader = memo(() => {
    return (
        <div className='messageheader'>
            <Link to='/mein'>
                <div className="icon" style={{ height: '30px' }}>
                    <svg t="1689611752186" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="51158" width="100%" height="100%"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" p-id="51159"></path></svg>
                </div>
            </Link>
            <div className='mesme'>
                我的资料
            </div>
        </div>
    )
})

export default MessageHeader