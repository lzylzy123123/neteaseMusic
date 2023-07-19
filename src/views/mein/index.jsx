import React, { memo, useEffect } from 'react'
import MeinHeader from '@/components/mein-cpn/MeinHeader'
import MeinBody from '@/components/mein-cpn/MeinBody'
import './mein.less'
import Footer from '@/components/footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeAction } from '@/store/modules/me'
import { useNavigate } from 'react-router-dom'
import { fetchList } from '@/store/modules/playlist'
import { fetchdetail } from '@/store/modules/listdetail'
import Playli from '@/components/playlist/playli'

const Mein = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeAction())
    dispatch(fetchList())
  }, [])
  const navigate = useNavigate();
  const { level, createDays, artistCount } = useSelector(store => store.me)
  const nickName = useSelector(store => store.playlist.createlist[0].nickName)
  const arrs = useSelector(store => store.playlist.createlist)
  const ins = useSelector(store => store.Detail.in)
  // const province = useSelector(store => store.Detail.in[0].province)
  const ids = arrs.map(item => {
    return item.listId
  })
  function changeMessage() {
    navigate('/message')
  }
  ids.map(item => {
    dispatch(fetchdetail(item))
  })

  return (
    <div className='in'>
      <div className='mein'>
        <MeinHeader></MeinHeader>
        <div className='body'>
          <MeinBody height='150px'>
            <div className='mess'>
              <div className='myname'>{nickName}</div>
              <div className='detail'>{artistCount}关注 { }粉丝 lv {level}</div>
              <div className='mes'>IP:重庆 重庆市 万州区 村龄{createDays}天</div>
              <div className='button' onClick={changeMessage}>编辑资料</div>
              <div className='icon'>
                <svg t="1689610571951" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50195"><path d="M726.62 470.62L545.94 651.31c-18.72 18.72-49.16 18.72-67.88 0L297.38 470.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L512 594.75l169.38-169.38c12.5-12.5 32.75-12.5 45.25 0 6.25 6.25 9.38 14.44 9.38 22.62s-3.13 16.39-9.39 22.63zM523.31 606.38v-0.31 0.31z" fill="#333333" p-id="50196"></path><path d="M128 512c0-211.74 172.26-384 384-384s384 172.26 384 384-172.26 384-384 384-384-172.26-384-384m-64 0c0 247.42 200.58 448 448 448s448-200.58 448-448S759.42 64 512 64 64 264.58 64 512z" fill="#333333" p-id="50197"></path></svg>
              </div>
            </div>
          </MeinBody>
          <div className='middle'>主页 动态 播客</div>
          <MeinBody height='150px' title='音乐品味'>
            <div className='colors'>
              <div className='red'>
                <div>
                  最新喜欢
                  <p>
                    你也不会对我有所
                  </p>
                </div>
              </div>
              <div className='yellow'>
                <div>
                  累计听歌
                  <p>
                    168首
                  </p>
                </div>
              </div>
              <div className='blue'>
                <div>
                  本周关键词
                  <p>每一首歌都心动</p>
                </div>
              </div>
            </div>
          </MeinBody>
          <MeinBody height={ins.length * 60 + 40 + 'px'} title='创建的歌单'>
            {
              ins.map((item, i) => {
                return <Playli coverImgUrl={item.coverImgUrl} key={i} name={item.name} length={item.musicname.length} Id={item.id}></Playli>
              })
            }
          </MeinBody>
          <MeinBody height='100px' title='基本信息'>
            <div className='base'>
              <div>村龄：  {createDays}天</div>
              <div>地区：重庆市</div>
            </div>
          </MeinBody>
          <div className='headname'>
            <svg t="1689597098372" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41832" ><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM213.333 832A298.667 298.667 0 0 1 512 533.333a170.667 170.667 0 1 1 170.667-170.666A170.667 170.667 0 0 1 512 533.333 298.667 298.667 0 0 1 810.667 832z" fill="#8A8A8A" p-id="41833"></path></svg>          </div>
        </div>
      </div>
      <div className='background'></div>
      <Footer is='true'></Footer>
    </div>
  )
})

export default Mein