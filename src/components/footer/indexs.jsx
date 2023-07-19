import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './indexs.less'

const Indexs = memo(({ name,src,img }) => {
    return (
        <NavLink to={src} className='nav'>
            <div className='name'>
                <div><img src={img} alt={name}/></div>
                <div>{name}</div>
            </div>
        </NavLink>
    )
})

export default Indexs