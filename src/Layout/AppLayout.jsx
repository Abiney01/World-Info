import React from 'react'
import Header from '../components/UI/Header'
import Footer from '../components/UI/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>  
    </>
  )
}

export default AppLayout