import React from 'react'
import video from '../assets/video.mp4';
import { Link } from 'react-router-dom';
import ae from '../assets/ae.gif';
import Ai from '../assets/Ai.gif';
import id from '../assets/id.gif';
import pr from '../assets/pr.gif';
import ps from '../assets/ps.gif';
import OIP from '../../src/assets/OIP.png';
import profile from '../assets/profile.gif';

function Home() {
  return (
    <>


      <section className="hero-section">
        <div className="hero-box">
          <video className="hero-video" src={video} autoPlay loop muted playsInline />
          <div className="hero-content">
            <h1>Welcome to GraphicWay Academy</h1>
            <p>Discover your design potential and build your creative future.</p>
            <Link to="/user/about-us" className="hero-button">Learn More About Us</Link>
          </div>
        </div>
      </section>

      <div className="apps">
        <h2 style={{ textAlign: "center", marginTop: "1rem", color: "#441654", fontWeight: "bold" }}>Graphic Design Apps</h2>
        <div className="app-logos" style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "9rem" }}>
          <img src={ae} alt="Logo" style={{ height: '60px' }} />
          <img src={Ai} alt="Logo" style={{ height: '60px' }} />
          <img src={id} alt="Logo" style={{ height: '60px' }} />
        </div>
        <div className="app-logos" style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "10rem" }}>
          <img src={pr} alt="Logo" style={{ height: '60px' }} />
          <img src={ps} alt="Logo" style={{ height: '60px' }} />
        </div>
      </div>

      <h2 className="font" style={{ textAlign: "center", marginTop: "3rem", color: "#441654", fontWeight: "bold" }}>Courses we Provide</h2>

      <div className='link' style={{ display: 'flex', justifyContent: 'center', flexDirection: "row" }}>
        <img width="30" height="30" src="https://img.icons8.com/glassmorphism/48/link.png" alt="link" />
        <Link to="courses" className='linkcourses' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', color: "#662087" }}>See More Courses</Link>
      </div>

      <div className='courses'>
        {[1, 2, 3].map((_, index) => (
          <div className="card" key={index}>
            <img src={OIP} alt="Course" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Description of the course goes here.</p>
              <Link to="/admin/coursesinfo" className="btn">See Course</Link>
            </div>
          </div>
        ))}
      </div>

            <div className='reviews'>
        <h2 style={{ textAlign: "center", marginTop: "3rem", color: "#441654", fontWeight: "bold" }}>Customers Feedbacks</h2>
      </div>
      <div className="review-container">
        <div className="review-card">
          <p className="review-text">
            I really benefited a lot from the course.
            Eng. Ahmed Saqr is very patient and always stays with us until we fully understand and learn.
            If we ever face any difficulties.
          </p>
          <div className="review-user">
            <img src={profile} alt="guest" />
            <h5>Asmaa Mohamed</h5>
          </div>
        </div>

        <div className="review-card">
          <p className="review-text">
            The place is very respectful, and so are the people running it.
            The instructors are excellent, and I personally benefited a lot from the course.
            Wishing everyone all the best
          </p>
          <div className="review-user">
            <img src={profile} alt="guest" />
            <h5>Mai Wagdy</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home








