import Main from '@/views/main'
import Mein from '@/views/mein'
import Load from '@/views/load'
import Message from '@/views/message'
import NickName from '@/views/nickName'
import City from '@/views/city'
import Sex from '@/views/sex'
import Birth from '@/views/birth'
import Show from '@/views/show'
import { Navigate } from 'react-router-dom'
import List from '@/views/playlist'

const mrouters = [
    {
        path: '/',
        element: <Navigate to='/load' />
    },
    {
        path: '/load',
        element: <Load />
    },
    {
        path: '/main/*',
        element: <Main />
    },
    {
        path: '/mein',
        element: <Mein />
    },
    {
        path: '/message',
        element: <Message />
    },
    {
        path: '/nickname',
        element: <NickName />
    },
    {
        path: '/sex',
        element: <Sex />
    },
    {
        path: '/birth',
        element: <Birth />
    },
    {
        path: '/city',
        element: <City />
    },
    {
        path: '/show',
        element: <Show />
    },
    {
        path:'mein/list',
        element:<List/>
    },
]

export default mrouters