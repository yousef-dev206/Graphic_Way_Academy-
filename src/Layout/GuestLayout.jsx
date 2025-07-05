import React from 'react'
import { useNavigate } from 'react-router-dom'

function GuestLayout() {

    const navigate = useNavigate() // Initialize the navigate function

    React.useEffect(() => {
        navigate('/user'); // Redirect to admin or user layout based on your logic
    }, [navigate]);

    return null;
}

export default GuestLayout;
