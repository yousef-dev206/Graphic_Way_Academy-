import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import sampleVideo from '../../assets/video2.mp4'; 

function Lesson() {
  const videoRef = useRef(null);

  const lessons = [
    "Introduction",
    "Lesson 1: Color Theory Basics",
    "Lesson 2: Typography Fundamentals",
    "Lesson 3: Layout & Composition",
    "Lesson 4: Working with Adobe Photoshop",
    "Lesson 5: Introduction to Adobe Illustrator",
    "Lesson 6: Branding & Visual Identity",
    "Lesson 7: UI/UX Design Principles",
    "Lesson 8: Portfolio Creation Tips",
    "Lesson 9: Client Communication & Feedback",
    "Lesson 10: Final Project Presentation"
  ];

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };



  const skipForward = () => {
    const video = videoRef.current;
    video.currentTime += 5;
  };

    const returnForward = () => {
    const video = videoRef.current;
    video.currentTime -= 5;
  };

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '40px'
      }}
    >
      <div style={{ flex: '1 1 400px', maxWidth: '900px' }}>
        <video ref={videoRef} src={sampleVideo} width="100%" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', marginBottom: '1rem'}}controls/>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
          <button onClick={togglePlay} style={btnStyle}>Play / Pause</button>

          <button onClick={skipForward} style={btnStyle}>+5s</button>
          <button onClick={returnForward} style={btnStyle}>-5s</button>
        </div>


        <h2 style={{ color: '#4a206a', marginBottom: '1rem' }}>Lesson Name</h2>
        <p style={{ color: '#555', lineHeight: '1.7', fontSize: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi voluptate
          nemo placeat dolore amet sed ipsum dolorem rerum, non excepturi in illum laboriosam
          delectus iste autem nisi porro est?
        </p>
      </div>

      <div
        style={{
          flex: '1 1 300px',
          maxWidth: '500px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '100%'
        }}
      >
        {lessons.map((lesson, index) => (
          <div key={index}>
            <p
              style={{
                margin: '15px 0',
                fontSize: '20px',
                color: "#4a206a",
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <img width="28" height="28" src="https://img.icons8.com/arcade/64/video.png" alt="video" />
              <Link to="/admin/lesson" style={{ color: '#4b1f8e', textDecoration: 'none' }}>
                {lesson}
              </Link>
            </p>
            {index !== lessons.length - 1 && (
              <hr style={{ border: '0', borderTop: '1px solid #ccc' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const btnStyle = {
  padding: '8px 14px',
  backgroundColor: '#4b1f8e',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default Lesson;
