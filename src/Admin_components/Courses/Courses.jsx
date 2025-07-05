import React from 'react';
import { Link } from 'react-router-dom';
import OIP from '../../assets/OIP.png';

const cardsData = [
    { id: 1, image: OIP, title: "COURSE1", description: "description" },
    { id: 2, image: OIP, title: "COURSE2", description: "description" },
    { id: 3, image: OIP, title: "COURSE3", description: "description" },
    { id: 4, image: OIP, title: "COURSE4", description: "description" },
    { id: 5, image: OIP, title: "COURSE5", description: "description" },
    { id: 6, image: OIP, title: "COURSE6", description: "description" },
    { id: 7, image: OIP, title: "COURSE7", description: "description" },

];

function Card({ image, title, description }) {
    return (
        <>
            <div className="card" style={{ width: "100%", maxWidth: "260px", border: "1px solid #ccc", borderRadius: "10px", }} >
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body" style={{ padding: "15px" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="/admin/coursesinfo" className="btn" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: "8px 12px", borderRadius: "5px" }}>
                        See Course
                    </Link>
                </div>
            </div>
        </>
    );
}

function Courses() {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
                <h2 className='titlecourse' style={{ color: "#441654", fontWeight: "bold", marginBottom: "1.5rem" }}>Courses we Provide</h2>
                <Link to="/admin/createcourse" className="btn" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "16px" }}>
                    Create Course
                </Link>
            </div>


            <div
                style={{
                    display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "40px",
                }}>
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
}

export default Courses;
