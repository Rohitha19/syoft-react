// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate=useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className='dashboard'>
            <div className="dashboard-container">
                <h1>Welcome, {user.user_firstname}!</h1>
                <div className="user-info">
                    <p><strong>Email:</strong> {user.user_email}</p>
                    <p><strong>Company:</strong> {user.user_company}</p>
                    <p><strong>Phone:</strong> {user.user_phone}</p>
                    <p><strong>City:</strong> {user.user_city}</p>
                    <p><strong>Zip Code:</strong> {user.user_zipcode}</p>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
        
        
    );
};

export default Dashboard;