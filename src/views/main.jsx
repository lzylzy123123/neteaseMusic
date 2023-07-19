import List from '@/components/left/list'
import React, { memo } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import routes from '@/router'
import Footer from '@/components/footer/footer'
import { useDispatch } from 'react-redux'
import { changeWidth } from '@/store/modules/left'

const Main = memo(() => {
    const dispatch = useDispatch();
    let x = null
    function movemouse(e) {
        if (!x) {
            x = e.clientX
        }
        // console.log(x - e.clientX);
        if (e.clientX - x > 7) {
            dispatch(changeWidth({ type: 'changewidth' }))
        }
    }
    return (
        <div className='main'>
            <List></List>
            <div className='page' onPointerMove={movemouse}>
                <Link to='/main/home'></Link>
                <Routes>
                    {
                        routes.map((item, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={item.path}
                                    element={item.element}
                                />
                            )
                        })
                    }
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    )
})

export default Main