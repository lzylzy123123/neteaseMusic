import { fetchList } from '@/store/modules/playlist'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MessageBox.less'


const MessageBox = memo(({ props }) => {
    const dispatch = useDispatch();
    // console.log(new Date('1994-04-04').getTime())
    useEffect(() => {
        dispatch(fetchList())
    }, [])
    const message = useSelector(store => store.message)
    const  {nickName,birthday,province,city,signature,sex}  = useSelector(store => store.playlist.createlist[0])
    // console.log(message);
    return (
        <div>
            <div className='messagebox'>
                {
                    props.props.map((item, i) => {
                        if (props.mes == 1) {
                            switch (i) {
                                case 0:
                                    return (
                                        <div key={i}>
                                            {item}
                                            <div className='headname'>
                                                <svg t="1689597098372" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41832" width='100%' height='100%'><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM213.333 832A298.667 298.667 0 0 1 512 533.333a170.667 170.667 0 1 1 170.667-170.666A170.667 170.667 0 0 1 512 533.333 298.667 298.667 0 0 1 810.667 832z" fill="#8A8A8A" p-id="41833"></path></svg>
                                            </div>
                                        </div>
                                    )
                                case 1:
                                    return (
                                        <Link to='/nickname' key={i}>
                                            <div>
                                                {item}
                                                <div className='change'>{nickName}</div>
                                            </div>
                                        </Link>
                                    )
                                case 2:
                                    return (
                                        <Link to='/sex' key={i}>
                                            <div>
                                                {item}
                                                <div className='change'>{sex}</div>
                                            </div>
                                        </Link>
                                    )
                                    break;
                                default:
                                    return (
                                        <div key={i}>
                                            {item}
                                            <div className='svg'>
                                                <svg t="1689663860567" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2395" width="100%" height="100%"><path d="M409 98H171c-40.317 0-73 32.683-73 73v238c0 40.317 32.683 73 73 73h238c40.317 0 73-32.683 73-73V171c0-40.317-32.683-73-73-73z m7 298c0 11.046-8.954 20-20 20H180c-11.046 0-20-8.954-20-20V180c0-11.046 8.954-20 20-20h216c11.046 0 20 8.954 20 20v216zM409 576H171c-40.317 0-73 32.684-73 73v238c0 40.316 32.683 73 73 73h238c40.317 0 73-32.684 73-73V649c0-40.316-32.683-73-73-73z m7 298c0 11.046-8.954 20-20 20H180c-11.046 0-20-8.954-20-20V658c0-11.046 8.954-20 20-20h216c11.046 0 20 8.954 20 20v216zM855 98H617c-40.316 0-73 32.683-73 73v238c0 40.317 32.684 73 73 73h238c40.316 0 73-32.683 73-73V171c0-40.317-32.684-73-73-73z m7 298c0 11.046-8.954 20-20 20H626c-11.046 0-20-8.954-20-20V180c0-11.046 8.954-20 20-20h216c11.046 0 20 8.954 20 20v216zM864 576c-17.673 0-32 14.327-32 32v320c0 17.673 14.327 32 32 32s32-14.327 32-32V608c0-17.673-14.327-32-32-32zM608 640c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32s32-14.327 32-32V672c0-17.673-14.327-32-32-32zM736 704c-17.673 0-32 14.327-32 32v192c0 17.673 14.327 32 32 32s32-14.327 32-32V736c0-17.673-14.327-32-32-32z" p-id="2396"></path></svg>
                                            </div>
                                        </div>
                                    )

                            }
                        }
                        else if (props.mes == 2) {
                            switch (i) {
                                case 0:
                                    return (
                                        <Link to='/birth' key={i}>
                                            <div>
                                                {item}
                                                <div className='change'>{birthday}</div>
                                            </div>
                                        </Link>
                                    )
                                case 1:
                                    return (
                                        <Link to='/city' key={i}>
                                            <div>
                                                {item}
                                                <div className='change'>{province}{city}</div>
                                            </div>
                                        </Link>
                                    )
                                case 4:
                                    return (
                                        <Link to='/show' key={i}>
                                            <div>
                                                {item}
                                                <div className='change'>{signature}</div>
                                            </div>
                                        </Link>
                                    )
                                default:
                                    return (
                                        <div key={i}>{item}</div>
                                    )

                            }
                        }
                        else {
                            return (
                                <div key={i}>{item}</div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
})

export default MessageBox