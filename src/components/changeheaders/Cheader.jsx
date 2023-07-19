import { changemessage } from '@/services/modules/users'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { changeList } from '@/store/modules/playlist'
import './Cheader.less'
const Cheader = memo((props) => {
    const cookie = useSelector(store=>store.me.cookie)
    const userId = useSelector(store=>store.me.userId)
    function change() {
        const value = props.res()
        console.log(value);
        async function send(){
            const res = await changemessage({cookie:cookie,userId:userId});
            console.log(res);
        }
        send()
    }
    return (
        <div className='header'>
            <div className="ic">
                <Link to='/message'>
                    <svg t="1689611752186" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="51158" width="100%" height="100%"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" p-id="51159"></path></svg>
                </Link>
            </div>
            <div className='title'>{props.title}</div>
            <div className='save' onClick={change}>{props.right}</div>
        </div>
    )
})

export default Cheader