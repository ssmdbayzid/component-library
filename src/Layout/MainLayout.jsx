import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import SideBar from '../Page/SideBar'

const MainLayout = () => {

  return (
    <div>
      <Header />
      <div className="">
      <Outlet />
      </div>
      
      </div>
  )
}

export default MainLayout