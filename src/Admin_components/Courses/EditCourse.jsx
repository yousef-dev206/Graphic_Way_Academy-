import React, { useState } from 'react'

function EditCourse(existingCourse) {
    const [courseData, setCourseData] = useState({
        title: existingCourse.title,
        price: existingCourse.price,
        description: existingCourse.description,
        image: existingCourse.image,
        videos: existingCourse.videos || [],
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
        console.log('Updated course:', courseData);
    };

    return (
        <>
            <div style={{ maxWidth: '500px', margin: '40px auto', background: '#f9f9f9', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                <h2 style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '1.5rem' }}> Edit Course</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>New Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: '10px', width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Title:</label>
                        <input type="text" name="title" value={courseData.title} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Price:</label>
                        <input type="number" name="price" value={courseData.price} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Description:</label>
                        <textarea name="description" value={courseData.description} onChange={handleChange} required rows={4} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
                    </div>

                    <div>
                        <label style={{ fontWeight: 'bold' }}>Upload New Videos:</label>
                        <input type="file" accept="video/*" multiple onChange={handleVideoChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                        {courseData.videos.length > 0 && (
                            <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>
                                {courseData.videos.map((video, index) => (
                                    <li key={index} style={{ marginBottom: '10px', fontSize: '15px', color: '#4b1f8e' }}>
                                        {typeof video === 'string' ? video : video.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button type="submit" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>  Save Changes</button>
                </form>
            </div>
            ;

        </>
    )
}

export default EditCourse
