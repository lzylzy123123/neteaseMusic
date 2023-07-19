import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import './playlist.less'

const Playli = memo((props) => {
    return (
        <Link to={
                `list?name=${props.name}&img=${props.coverImgUrl}&id=${props.Id}`
        }>
            <div className='playlist'>
                <div className='photo' style={{ backgroundImage: `url(${props.coverImgUrl})`, backgroundSize: '100% 100%' }}></div>
                <div className='theme'>
                    <div className='up'>{props.name}</div>
                    <div className='down'>{props.length}首</div>
                </div>
            </div>
        </Link>
    )
})

export default Playli