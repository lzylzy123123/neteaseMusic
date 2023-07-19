import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import mrouters from './router/mrouter'
const App = memo(() => {
  return (
    <div className='app'>
      <Routes>
        {
          mrouters.map((item, i) => {
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
  )
})

export default App
