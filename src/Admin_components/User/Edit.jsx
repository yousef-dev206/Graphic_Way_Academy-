import React, { useEffect, useState } from 'react'

function Edit(initialData) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        address: initialData.address || '',
        password: '',
        confirmPassword: '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address, password, confirmPassword } = formData;

    if (!name || !email || !phone || !address) {
      return setMessage('Please fill in all required fields.');
    }

    if (password && password !== confirmPassword) {
      return setMessage('Passwords do not match.');
    }

    // Simulate saving
    setMessage('User updated successfully ');
  };

  return (
    <>
      <div style={{ maxWidth: '500px', margin: '40px auto', background: '#f9f9f9', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '1.5rem' }}> Edit User</h2>
        {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red', textAlign: 'center', marginBottom: '1rem' }}>{message}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="New Password (optional)" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Save Changes
          </button>
        </form>
      </div>
    </>

  )
}

export default Edit
