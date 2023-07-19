import React, { memo, useEffect } from 'react'
import './index.less'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeAction } from '@/store/modules/me'
import { fetchList } from '@/store/modules/playlist'
import { fetchdetail } from '@/store/modules/listdetail'

const List = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMeAction())
        dispatch(fetchList())
    }, [])
    const [search, setSearch] = useSearchParams()
    const name = search.get('name')
    const id = search.get('id')
    const img = search.get('img')
    const mename = useSelector(store => store.playlist.createlist[0].nickName)
    const lists = useSelector(store => store.Detail.in)
    let musicname = ''
    lists.map(item => {
        if (item.id == id) {
            musicname = item.musicname
        }
    })
    return (
        <div className='back'>
            <div className='meinheader'>
                <Link to={'/mein'}>
                    <div className="icon" style={{ height: '40px' }}>
                        <svg t="1689611752186" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="51158" width="100%" height="100%"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="#ffffff" p-id="51159"></path></svg>
                    </div>
                </Link>
                <div className='blank'>
                    歌单
                    <i>
                        <svg t="1689732987235" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2296" width="100%" height="100%"><path d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z" fill="#ffffff" p-id="2297"></path></svg>
                    </i>
                </div>
                <div className='icon'><svg t="1689570692587" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5917" width="100%" height="100%"><path d="M512 0a113.778 113.778 0 0 0-113.778 113.778A113.778 113.778 0 0 0 512 227.556a113.778 113.778 0 0 0 113.778-113.778A113.778 113.778 0 0 0 512 0zM398.222 910.222A113.778 113.778 0 0 0 512 1024a113.778 113.778 0 0 0 113.778-113.778A113.778 113.778 0 0 0 512 796.444a113.778 113.778 0 0 0-113.778 113.778z m0-398.222A113.778 113.778 0 0 0 512 625.778 113.778 113.778 0 0 0 625.778 512 113.778 113.778 0 0 0 512 398.222 113.778 113.778 0 0 0 398.222 512z" p-id="5918" fill="#ffffff"></path></svg></div>
            </div>
            <div className='img' style={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%' }}></div>
            <div className='name'>{name}</div>
            <div className='mename'>{mename}</div>
            <div className='body'>
                <div className='tl'>播放全部</div>
                <div className='total'>
                    {
                        musicname.map((item, i) => {
                            return (
                                <div key={i} className='musics'>{i+1} {item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
})

export default List