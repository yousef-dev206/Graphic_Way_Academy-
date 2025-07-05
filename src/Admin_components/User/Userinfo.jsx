import React from 'react';
import image from '../../assets/Profile image.jfif';

function Userinfo() {
    return (
        <>
            <div style={{ background: 'linear-gradient(135deg, #f3f2f7, #ffffff)', padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '600px', backgroundColor: '#ffffffcc', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' ,marginTop:"2rem" }}>
                    <h2 className='listfont' style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '10px' }}>Users Info</h2>
                    <img src={image} alt="user" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <p style={{ color: '#333', fontSize: '15px', textAlign: 'center', marginTop: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div style={{ width: '100%', marginTop: '1rem' }}>
                        <h4 className='info'  style={{  margin: '8px 0' }}>Name: Yousef</h4 >
                        <h4 className='info' style={{  margin: '8px 0' }}>Phone: 01222222</h4 >
                        <h4 className='info' style={{  margin: '8px 0' }}>Address: Alex, Egypt</h4 >
                        <h4 className='info' style={{  margin: '8px 0' }}>Birthday: 10/9/2006</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userinfo;
