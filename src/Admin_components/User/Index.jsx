import React from 'react'
import { Link } from 'react-router-dom';


function Index() {
  const users = [
    { id: 1, name: 'Youssef Waleed', phone: '01000000000', address: 'Cairo, Egypt' },
    { id: 2, name: 'Ahmed Mostafa', phone: '01111111111', address: 'Alexandria, Egypt' },
    { id: 3, name: 'Mariam Nabil', phone: '01222222222', address: 'Giza, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
    { id: 4, name: 'Sarah Ali', phone: '01033333333', address: 'Tanta, Egypt' },
  ];
  return (
    <>


      <div style={{ minHeight: '100vh', background: '#fff', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}>
        <div style={{ width: '100%', maxWidth: '900px', backgroundColor: '#ffffffcc', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflowX: 'auto', }}>
          <div style={{ textAlign: "center",marginBottom:"1rem" }}>
          <h2 className='listfont' style={{ textAlign: 'center', color: '#4b1f8e', marginBottom: '20px' }}>
            Users List
          </h2>
            <Link to="/admin/create" className="btn" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "16px" }}>
              Create user
            </Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
            <thead>
              <tr style={{ backgroundColor: '#4b1f8e', color: '#fff' }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Address</th>
                <th style={thStyle}>Edit</th>
              </tr>
            </thead>




            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={tdStyle}>{user.id}</td>
                  <td style={tdStyle}><Link to="/admin/userinfo" style={{ textDecoration: "none", color: "black" }}>{user.name}</Link></td>
                  <td style={tdStyle}>{user.phone}</td>
                  <td style={tdStyle}>{user.address}</td>
                  <td style={tdStyle}> <Link to="/admin/edit" className="btn" style={{ backgroundColor: '#4b1f8e', color: 'white', padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "16px" }}>
                    Edit User
                  </Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}


const thStyle = {
  padding: '12px',
  textAlign: 'left',
};

const tdStyle = {
  padding: '12px',
  textAlign: 'left',
  color: '#333',
};

export default Index
