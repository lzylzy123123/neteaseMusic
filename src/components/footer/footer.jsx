import React, { memo } from 'react'
import './footer.less'
import Indexs from './indexs'
import Musicrun from './musicrun'
import swim from '@/assets/img/swim.png'
import bo from '@/assets/img/bo.png'
import find from '@/assets/img/find.png'
import my from '@/assets/img/my.png'
import com from '@/assets/img/com.png'

const Footer = memo((props) => {
    if (props.is=='true') {
        return (
            <div className='footer' style={{height:'50px'}}>
                <div className='musicrun' style={{height:'100%'}}>
                    <Musicrun></Musicrun>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='footer'>
                <div className='musicrun'>
                    <Musicrun></Musicrun>
                </div>
                <div className='index'>
                    <Indexs name={'发现'} src={'/main/home'} img={find}></Indexs>
                    <Indexs name={'播客'} src={'/main/boke'} img={bo}></Indexs>
                    <Indexs name={'漫游'} src={'/main/swim'} img={swim}></Indexs>
                    <Indexs name={'社区'} src={'/main/community'} img={com}></Indexs>
                    <Indexs name={'我的'} src={'/main/me'} img={my}></Indexs>
                </div>
            </div>
        )
    }
})

export default Footer