import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='appLayout'>
        <div className='sidebar'>
            <Outlet />
        </div>
        <Map />
    </div>
  )
}

export default AppLayout