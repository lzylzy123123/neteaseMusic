import React, { memo } from 'react'
import MessageBox from '@/components/message-cpn/MessageBox'
import message from '@/assets/data/messagedata'
import MessageHeader from '@/components/message-cpn/MessageHeader'
import "./index.less"
const Message = memo(() => {

    return (
        <div className='message'>
            <MessageHeader></MessageHeader>
            <MessageBox props={{props:message[0],mes:1}}></MessageBox>
            <MessageBox props={{props:message[1],mes:2}}></MessageBox>
            <MessageBox props={{props:message[2]}}></MessageBox>
            <MessageBox props={{props:message[3]}}></MessageBox>
        </div>
    )
})

export default Message