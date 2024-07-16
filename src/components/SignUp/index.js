import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_phone: '',
        user_password: '',
        user_city: '',
        user_zipcode: '',
        user_company: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', formData);
            if (response.status === 200) {
                localStorage.setItem('signupData', JSON.stringify(formData));
                history('/login');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    const images=[
        "https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg",
        "https://storage.googleapis.com/pfpai/styles/3265a266-3c54-4460-9e07-3bfc95cadca2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20240715%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240715T020127Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=200d593ed15281d5c87ef4d570a4b8d26c15a7172e085e7168aadeb5fa4cf1b8e24589e7d75ed74e1be8c9f6c46068ec1d56ec563a2575084cb8941656b5d39a2b4bc0d14860dad722766275900ba8a87cad9d8fb26a443430ba4a06f7ac3898890bf06971d06951c36cbab4065fecbdbba975d88e475e12a9173e778077b9953c5fcb3d4a0458b6ba77dec615c33636a1b06761802729ed3318b4f4528d4de161cf509d64464287e402db819bbee6ec9de7ca56e68169e9ee5eb96340d8d8f97670e7f453cc25b2345f4418a8d3e61acb5d4a21af60d995e01ea50df1d4c26dec99cdb4530ec66eb4e6dafd67b184158aef52cc836dc8ecfc9cd4bd404a5423",
        "https://www.brisbaneheadshots.com.au/images/galleries/men-corporate/business-headshots.jpg",
        "https://www.brisbaneheadshots.com.au/images/galleries/men-corporate/corporate-casual-businessman.jpg",
    ]

    return (
        <div className="signup-container">
            <div className="signup-content">
                <div className="welcome-section">
                    <h1 className="heading">Welcome to<br/> our community</h1>
                    <p className="para">Fuse helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                    
                    <div className='image-row'>
                        {images.map((image,index)=>(
                            <div key={index} className="image-container">
                                <img className="circular-image" src={image} alt={`Profile ${index+1}`}/>
                            </div>
                        ))}
                        <span className='para'>More than 17k people joined us, it’s your turn</span>
                    </div>
                </div>
                <div className="form-section">
                    <img alt="" src='https://res.cloudinary.com/dyutmmnia/image/upload/e_improve:indoor/apvjhcbxn0kqhy3vhbhp.jpg' className='image'/>
                    <form onSubmit={handleSubmit}>
                        <h2>Sign up</h2>
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        <div className="form-group">
                            <label htmlFor="user_firstname">First Name *</label>
                            <input
                                type="text"
                                name="user_firstname"
                                id="user_firstname"
                                value={formData.user_firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_lastname">Last Name *</label>
                            <input
                                type="text"
                                name="user_lastname"
                                id="user_lastname"
                                value={formData.user_lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">Email address *</label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_phone">Phone Number *</label>
                            <input
                                type="tel"
                                name="user_phone"
                                id="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_password">Password *</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="user_password"
                                    id="user_password"
                                    value={formData.user_password}
                                    onChange={handleChange}
                                    required
                                />
                                <i
                                    className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                                    id="togglePassword"
                                    onClick={toggleShowPassword}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                ></i>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_city">City *</label>
                            <input
                                type="text"
                                name="user_city"
                                id="user_city"
                                value={formData.user_city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_zipcode">Zip Code *</label>
                            <input
                                type="text"
                                name="user_zipcode"
                                id="user_zipcode"
                                value={formData.user_zipcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_company">Company *</label>
                            <input
                                type="text"
                                name="user_company"
                                id="user_company"
                                value={formData.user_company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="terms">
                            <input type="checkbox" required />
                            <label>
                                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                            </label>
                        </div>
                        <div className="button">
                            <button className="create-account" type="submit">Create your free Account</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;