import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="background-img"></div>
    </>
  )
}

export default Layout