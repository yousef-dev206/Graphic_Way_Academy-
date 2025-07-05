import React from 'react'
import { Link } from 'react-router-dom'
function About_us() {

  return (
    <>
     
     <section className="about-section">
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          <strong>Graphic Way Academy</strong> is a creative academy dedicated to empowering students with
          professional graphic design skills. We believe that creativity should be accessible, practical,
          and inspiring — and we’re here to help you become the designer you dream of.
        </p>

        <h2>What We Offer</h2>
        <p>
          From Adobe Photoshop and Illustrator to InDesign and more, we offer hands-on training in the
          industry’s most powerful tools. Whether you're just starting out or looking to level up,
          our courses are built to help you grow confidently.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li><img width="30" height="30" src="https://img.icons8.com/color-glass/100/group-of-projects.png" alt="group-of-projects"/> Real-World Projects & Creative Challenges</li>
          <li><img width="30" height="30" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-expert-auction-house-flaticons-flat-flat-icons-4.png" alt="external-expert-auction-house-flaticons-flat-flat-icons-4"/> Expert Trainers with Practical Experience</li>
          <li><img width="30" height="30" src="https://img.icons8.com/color/100/laptop--v3.png" alt="laptop--v3"/> Training on Adobe & Industry-Standard Apps</li>
          <li><img width="30" height="30" src="https://img.icons8.com/color-glass/100/thumbs-up-down.png" alt="thumbs-up-down"/> Personalized Feedback & Ongoing Support</li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default About_us