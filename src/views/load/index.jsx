// import store from '@/store'
// import { fetchInit } from '@/store/modules/me'
import React, { memo, useEffect } from 'react'
// import { useDispatch } from 'react-redux'


const Load = memo(() => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchInit())
    // }, [])
    // console.log(store.getState().me.userId)
    // let userId = '';
    // userId = store.getState().me.userId
    // const navigate = useNavigate()
    // let key = ''
    // useEffect(() => {
    // async function fetchData() {
    //     const res = await getAll('login/qr/key?')
    //     console.log(res)
    //     key = res.data.data.unikey
    //     const two = await getAll(`/login/qr/create?key=${key}&qrimg=true&`)
    //     const url = two.data.data.qrurl
    //     console.log(url)
    //     window.open(url)
    //     let timer
    //     timer = setInterval(async function fetchstate() {
    //         const code = await getAll(`/login/qr/check?key=${key}&noCookie=true&`)
    //         console.log(code.data.code);
    // if (code !== 803) {

    // }
    // else {
    //     window.location.href = 'http://localhost:3001/main/home'
    // }
    // }, 3000)

    // window.location.href = 'http://localhost:3001/main/home'
    // }
    // fetchData();
    // let date = new Date().getTime()
    // setInterval(async function fetchstate() {
    //     let res = 0;
    //     if (res !== 803) {
    //         const r = await axios.get(`http://localhost:3000/login/qr/check?key=${key}&timestamp=${date}`)
    //         date = new Date().getTime()
    //         res = r.data.code
    //         console.log(date)
    //         console.log(res);
    //     }
    //     else {
    // const loop = ()=> {
    //     userId = store.getState().me.userId
    //     if (userId) {
            window.location.href = 'http://localhost:3001/main/home'
        // }
        // else {
        //     console.log(userId)
        //     loop();
        // }
    // }
    //     }
    // }, 5000)
    // 
    // }, [])

    return (
        <div></div>
    )
})

export default Load