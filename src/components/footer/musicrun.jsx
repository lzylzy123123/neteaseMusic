import React, { memo } from 'react'
import "./musicrun.less"
// import { useSelector } from 'react-redux'
// import store from '@/store'
import Leftimg from '../left/left'
import { useStore } from 'react-redux'

const Musicrun = memo(() => {

    const store=useStore();
    const { musicname } = store.getState().music
    return (
        <div className='music'>
            <div></div>
            <div>{musicname}</div>
            <div className='icon' style={{right:'60px'}}><svg t="1689570823636" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13068" width="100%" height="100%"><path d="M533.11 973.01c-58.78 0-115.81-11.52-169.52-34.23-51.86-21.94-98.43-53.33-138.42-93.32-39.99-39.99-71.38-86.56-93.32-138.42-22.72-53.7-34.23-110.74-34.23-169.52S109.14 421.71 131.85 368c21.94-51.86 53.33-98.43 93.32-138.42s86.56-71.38 138.42-93.32c53.71-22.72 110.74-34.23 169.52-34.23s115.81 11.52 169.52 34.23c51.86 21.94 98.43 53.33 138.42 93.32 39.99 39.99 71.38 86.56 93.32 138.42 22.71 53.71 34.23 110.74 34.23 169.52s-11.52 115.82-34.23 169.52c-21.94 51.86-53.33 98.43-93.32 138.42-39.99 39.99-86.56 71.38-138.42 93.32-53.71 22.71-110.74 34.23-169.52 34.23z m0-822.98c-52.32 0-103.06 10.24-150.82 30.44-46.14 19.52-87.58 47.46-123.18 83.05-35.59 35.59-63.54 77.04-83.05 123.18-20.2 47.76-30.44 98.5-30.44 150.82s10.24 103.07 30.44 150.82c19.52 46.14 47.46 87.58 83.05 123.18s77.04 63.54 123.18 83.05c47.76 20.2 98.5 30.44 150.82 30.44s103.06-10.24 150.82-30.44c46.14-19.51 87.58-47.46 123.18-83.05s63.54-77.04 83.05-123.18c20.2-47.76 30.44-98.5 30.44-150.82s-10.24-103.06-30.44-150.82c-19.51-46.14-47.46-87.58-83.05-123.18-35.59-35.59-77.04-63.54-123.18-83.05-47.76-20.2-98.5-30.44-150.82-30.44z" fill="#231815" p-id="13069"></path><path d="M443.99 724.62c-8.02 0-16.05-2.11-23.36-6.33-14.62-8.44-23.35-23.56-23.35-40.44V397.19c0-16.89 8.73-32.01 23.35-40.45 14.62-8.44 32.08-8.44 46.7 0.01L710.4 497.08c14.62 8.44 23.35 23.56 23.35 40.44s-8.73 32-23.36 40.44L467.34 718.29c-7.31 4.22-15.33 6.33-23.35 6.33z m1.3-325.18V675.6l239.16-138.08-239.16-138.08zM686.4 538.65z" fill="#231815" p-id="13070"></path></svg></div>
            <div className='icon'><svg t="1689571101744" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4165" width="100%" height="100%"><path d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM533.333333 170.666667h426.666667a21.333333 21.333333 0 0 0 0-42.666667H533.333333a21.333333 21.333333 0 0 0 0 42.666667z m426.666667 341.333333H533.333333a21.333333 21.333333 0 0 0 0 42.666667h426.666667a21.333333 21.333333 0 0 0 0-42.666667zM62.833333 593.12a37.213333 37.213333 0 0 0 38.713334-2.666667l309.333333-218.633333a37.333333 37.333333 0 0 0 0-60.973333l-309.333333-218.633334A37.333333 37.333333 0 0 0 42.666667 122.7V560a37.2 37.2 0 0 0 20.166666 33.12z" fill="#5C5C66" p-id="4166"></path></svg></div>
        </div>
    )
})

export default Musicrun