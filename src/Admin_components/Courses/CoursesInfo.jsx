import React, { useState } from 'react';
import OIP from '../../assets/OIP.png';
import { Link } from 'react-router-dom';


function CoursesInfo() {
    const [showLessons, setShowLessons] = useState(false);

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

    return (
        <>
            <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '40px', gap: '30px' }}>

                <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                    <img src={OIP} alt="course" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '12px' }} />
                </div>

                <div style={{ flex: '1 1 300px' }}>
                    <Link to="/admin/editcourse" className="btn" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "16px" }}>
                        Edit Course
                    </Link>
                    <h2 style={{ color: "#441654", marginBottom: '1rem' }}>Course Name</h2>
                    <h4 style={{ color: "#736694", marginBottom: '1rem' }}>Course Price: 5000 EGP</h4>
                    <p style={{ color: "#675a88", lineHeight: '1.6' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias aut
                        necessitatibus repudiandae magni cumque quia, alias iure quam laboriosam explicabo
                        eligendi nemo commodi nesciunt laborum odio quis! Voluptatibus, alias?
                    </p>
                </div>
            </section>

            <section style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: "#65234b" }}>Course Lessons</h3>

                <button className='button'
                    onClick={() => setShowLessons(!showLessons)}
                    style={{
                        backgroundColor: '#4b1f8e', color: 'white', padding: '10px 16px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '20px',

                    }}
                >
                    {showLessons ? 'Hide Lessons' : 'Show Lessons'}
                    <img width="30" height="30" style={{ marginLeft: "1rem" }} src="https://img.icons8.com/neon/96/expand-arrow.png" alt="expand-arrow" />
                </button>

                {showLessons && (
                    <div style={{ marginTop: '20px', maxWidth: '700px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
                        {lessons.map((lesson, index) => (
                            <div key={index}>
                                <p style={{ margin: '10px 0', fontSize: '25px', color: "#4a206a" }}>
                                    <Link to="/admin/lesson" style={{ color: '#4b1f8e', textDecoration: 'none' }}>
                                        <img width="40" height="40" src="https://img.icons8.com/arcade/64/video.png" alt="video" /> {lesson}
                                    </Link>
                                </p>
                                {index !== lessons.length - 1 && (
                                    <hr style={{ border: '0', borderTop: '1px solid black' }} />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}

export default CoursesInfo;
