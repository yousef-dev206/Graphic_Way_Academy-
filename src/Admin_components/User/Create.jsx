import React, { useState } from 'react'

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError('Please fill in all fields.');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    setSuccess('User created successfully!');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };
  return (
    <>
      <div style={{ maxWidth: '500px', margin: '40px auto', background: '#f9f9f9', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '1.5rem' }}> Create New User</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginBottom: '1rem', textAlign: 'center' }}>{success}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Create User</button>
        </form>
      </div>
    </>

  )
}

export default Create
