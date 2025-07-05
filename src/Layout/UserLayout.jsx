import React from 'react'
import UserNavbar from '../User_Components/UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function UserLayout() {
  return (
    <>
      <UserNavbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default UserLayout
