import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../src/assets/Logo.png'
function Footer() {
    return (
        <>
        
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link className="navbar-brand" style={{display:"flex",justifyContent:"center" }} to=""><img src={Logo} alt="Logo" style={{ height: '40px'}} /></Link>
          <p style={{textAlign:"center",color:"#877baa"}}>Creative design courses & tools for the future.</p>
        </div>

         <div className="footer-section" style={{display:"flex",justifyContent:"center" }}>
          <h5 style={{textAlign:"center",marginRight:"1rem",fontSize:"1.2rem",marginTop:"5px",color:"#978ab7"}}>Follow Us</h5>
          <div className="social-icons">
            <Link to="https://www.facebook.com/share/1BfdLN5hSs/?mibextid=wwXIfr"><img width="30" height="30" src="https://img.icons8.com/arcade/64/facebook.png" alt="facebook"/></Link>
          </div>
        </div>


        <div className="footer-section" style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"1rem",marginTop:"1rem"}}>
            <Link to="courses"  className="footerlinks"style={{textDecoration:"none",color:"#877baa"}}>Courses</Link>
            <Link to="about-us" className="footerlinks" style={{textDecoration:"none",color:"#877baa"}}>About-Us</Link>
            <Link to="contact-us"  className="footerlinks" style={{textDecoration:"none",color:"#877baa"}}>Contact-Us</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 GraphicWay. All rights reserved.</p>
      </div>
    </footer>
        </>
    )
}

export default Footer
