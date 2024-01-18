import React from 'react'
import clasess from "./layout.module.css"
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={clasess.layout}>
    <Header/>
    <div className={clasess.outlet} >
    <Outlet/>
    </div>
    </div>
  )
}

export default Layout