import React, { memo } from 'react'
import './box.less'
const Box = memo(({ data }) => {
  return (
    <div className='boxs'>
      <div className='box'>
        {
          data.box1.map((item, i) => {
            return(
              <div key={i}>{item}</div>
            )
          })
        }
      </div>
      <div className='box'>
        {
          data.box2.map((item, i) => {
            return(
              <div key={i}>{item}</div>
            )
          })
        }
      </div>
      <div className='box'>
        {
          data.box3.map((item, i) => {
            return(
              <div key={i}>{item}</div>
            )
          })
        }
      </div>
      <div className='box'>
        {
          data.box4.map((item, i) => {
            return(
              <div key={i}>{item}</div>
            )
          })
        }
      </div>
      <div className='box'>

        {
          data.exit.map((item, i) => {
            return(
              <div key={i} className='exit'>{item}</div>
            )
          })
        }
      </div>
    </div>
  )
})

export default Box