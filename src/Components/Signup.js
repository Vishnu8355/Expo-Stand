import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { signup } from '../API/auth';
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validateName } from '../Utils/Validation';
import { toast } from 'react-toastify';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {
            username: validateName(username),
            email: validateEmail(email),
            password: validatePassword(password),
        };
        setErrors(newErrors);
        const isValid = !Object.values(newErrors).some(error => error);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            
            const userData = await signup({
                username: username.trim(),
                email: email.trim(),
                password: password.trim(),
            });

        
            console.log('Signup successful:', userData);

            
            

            
            toast.success('Registration successful!', { autoClose: 3000 });
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Signup error:', error);

            if (error.response) {
                const errorMessage = error.response.data.message || 'Signup failed. Please try again.';
                if (error.response.status === 400) {
                    toast.error('Invalid data. Please check your input and try again.');
                } else if (error.response.status === 409) {
                    toast.error('Email already in use. Please use a different email.');
                } else {
                    toast.error(errorMessage);
                }
            } else if (error.request) {
                toast.error('No response received. Please check your connection.');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen py-5" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D")' }}
                    >
                        <h1 className="text-white text-4xl mb-3 font-[poppins]">Welcome</h1>
                        <div>
                            <p className="text-white font-[poppins]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                                <a href="#" className="text-purple-500 font-semibold">Learn more</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4 font-[poppins]">Register</h2>
                        <p className="mb-4 font-[poppins]">
                            Create your account. It’s free and only takes a minute.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                    className="border border-gray-400 w-full py-1 font-[poppins] px-2"
                                />
                                {errors.username && <p className="text-red-500">{errors.username}</p>}
                            </div>
                            <div className="mt-5">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    className="border border-gray-400 py-1 px-2 w-full font-[poppins]"
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <div className="mt-5 relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className="border border-gray-400 py-1 px-2 w-full font-[poppins]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-purple-500 py-3 font-[poppins] text-xl text-center text-white">
                                    Register Now
                                </button>
                            </div>
                            <div className="mt-5">
                                <span className='font-[poppins]'>
                                    Already have an account?{" "}
                                    <Link to="/" className="text-purple-500 font-semibold hover:underline">
                                        Login Here
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
