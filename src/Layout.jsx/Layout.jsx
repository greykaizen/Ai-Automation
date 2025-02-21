import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <>
        <Sidebar />
        <Navbar />
        <Outlet />
    </>
  )
}

export default Layout