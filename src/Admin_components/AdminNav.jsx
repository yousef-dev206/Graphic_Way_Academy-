import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png';
function AdminNav() {
    return (
        <>
        <div style={{marginTop:"4rem"}}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4E236A' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ marginLeft: '5rem' }} to="">
                        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    </Link>
                    <button
                        className="navbar-toggler border-0 bg-transparent p-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{
                            outline: 'none',
                            boxShadow: 'none'
                        }}
                    >
                        <img
                            src="https://img.icons8.com/arcade/64/circled-chevron-down.png"
                            alt="circled-chevron-down"
                            style={{
                                width: '40px',
                                height: '40px',
                                objectFit: 'contain',
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            className="circle-icon"
                        />

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item" >
                                <Link className="nav-link" style={{ marginRight: '2rem', color: 'white', fontSize: '1.2rem' }} aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link " style={{ marginRight: '2rem', color: 'white', fontSize: '1.2rem' }} to="courses">Courses</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" style={{ marginRight: '2rem', color: 'white', fontSize: '1.2rem' }} to="index">User</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to="dashboard" style={{ marginRight: '5rem', color: 'white', fontSize: '1.2rem' }}>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>    

        </>


    )
}

export default AdminNav
