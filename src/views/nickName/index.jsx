import React, { memo, useState } from 'react'
import Cheader from '@/components/changeheaders/Cheader'
import './index.less'
import { useDispatch, useSelector } from 'react-redux'

// import { changeList } from '@/store/modules/playlist'

const NickName = memo(() => {
  // const dispatch = useDispatch()
  function getValue() {
    return inputValue
  }
  const nickName = useSelector(store => store.playlist.createlist[0].nickName)
  const [inputValue, setInputValue] = useState(nickName);
  return (
    <div>
      <Cheader title='修改昵称' right='保存' res={getValue} />
      <div className='inputborder'>
        <input type="text" className='in' value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }} />
      </div>
    </div>
  )
})

export default NickName