import React from 'react'
import AdminNav from '../Admin_components/AdminNav'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'


function Adminlayout() {
    return (
        <>
        <AdminNav/>
        <Outlet/>
        <Footer/>
        </>
     
    )
}

export default Adminlayout
