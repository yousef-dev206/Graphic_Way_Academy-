import React from 'react'
import { useState } from 'react';

function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    price: '',
    description: '',
    image: null,
    videos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageChange = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleVideoChange = (e) => {
    setCourseData({ ...courseData, videos: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseData);
  };

  return (
    <>
      <div style={{ maxWidth: '500px', margin: '40px auto', background: 'linear-gradient(145deg, #fdfdfd, #f1f1f1)', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'  }}>
        <h2 style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '1.5rem', fontWeight: 'bold' }}> Create New Course</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px'   }}>

          <div>
            <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Course Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            {courseData.image && (
              <img
                src={URL.createObjectURL(courseData.image)}
                alt="Preview"
                style={{ marginTop: '15px', width: '100%', maxHeight: '250px', borderRadius: '10px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            )}
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Title:</label>
            <input type="text" name="title" value={courseData.title} onChange={handleChange} required placeholder="Course Title" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Price:</label>
            <input type="number" name="price" value={courseData.price} onChange={handleChange} required placeholder="EGP" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Description:</label>
            <textarea name="description" value={courseData.description} onChange={handleChange} required placeholder="Write course description..." rows={4} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Upload Course Videos:</label>
            <input type="file" accept="video/*" multiple onChange={handleVideoChange} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            {courseData.videos.length > 0 && (
              <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>
                {courseData.videos.map((video, index) => (
                  <li key={index} style={{ marginBottom: '10px', fontSize: '15px', color: '#4b1f8e' }}>
                    🎥 {video.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type="submit" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
            Create Course
          </button>
        </form>
      </div>

    </>

  )
}

export default CreateCourse
