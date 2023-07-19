import React, { memo } from 'react'
import MyRequest from '@/services'
import { useEffect } from 'react'
import { useState } from 'react'
import HomeHeader from '@/components/home-cpn/home-header'


const Home = memo(() => {
  // const [highScore,setHighScore]=useState({})

  useEffect(()=>{
    
  },[])
  return (
    <div>
      <HomeHeader>
      </HomeHeader>
    </div>
  )
})

export default Home