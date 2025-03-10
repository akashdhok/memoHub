import React from 'react'
import TopNav from './components/TopNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <TopNav/>
    <Outlet/>
    </>
  )
}

export default Layout