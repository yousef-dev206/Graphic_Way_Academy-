import React from 'react'
import Contactinfo from '../assets/Contactinfo.jpg';
function Contact_us() {
  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '40px', gap: '30px' }}>

        <div style={{ flex: '1 1 300px', justifyContent: "start", marginLeft: "4rem" }}>
          <h1>Contact Us</h1>
          <p style={{ color: " #877baa" }}>Feel Comfort To Contact Us Any Time.<br /> We Will Get Back To You as Soon As Possible!  </p>
          <form>
            <label name="name" className='labels'>Name</label>
            <input name='name' type="text" />
            <label name="email" className='labels'>Email</label>
            <input name='email' type="email" />
            <label name="message" className='labels'>Message</label>
            <textarea name="message"></textarea>
            <input type="Submit" />
          </form>
        </div>

        <div style={{ flex: '1 1 300px' }}>
          <div className="contactinfo" style={{ width: '100%', height:"25rem", maxWidth: '400px', backgroundImage: `url(${Contactinfo})`, backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(60px)', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '12px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '2rem', color: '#261754' }}>
            <h1 className='labels' style={{color:"white" ,textAlign:"center",marginTop:"4rem"}}>Contact Info</h1>
            <p  className='labels' style={{color:"white",marginTop:"1rem"}}> <img width="20" height="20" src="https://img.icons8.com/fluency/48/region-code.png" alt="region-code"/> Address: Gleem,Alexandria,Egypt</p>
            <p className='labels' style={{color:"white",marginTop:"1rem"}}><img width="20" height="20" src="https://img.icons8.com/lollipop/48/facebook-new.png" alt="facebook-new"/> facebook: com/GraphicWayAcademy</p>
            <p className='labels' style={{color:"white",marginTop:"1rem"}}><img width="20" height="20" src="https://img.icons8.com/color-glass/100/whatsapp.png" alt="whatsapp"/> WhatsApp: +02 01002853407</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact_us