import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../Utils/Validation';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {
            email: validateEmail(email),
            password: validatePassword(password),
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;

        setLoading(true);

        try {
            const success = await login({ email, password });
            if (success) {
                toast.success('Login successful!', { autoClose: 3000 });
                console.log('Navigating to layout');
                navigate('/layout');
            } else {
                toast.error('Invalid login credentials. Please try again.');
            }
        } catch (error) {
            console.error('Login attempt failed:', error);
            toast.error(`Login failed: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen py-5"
            style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
        >
            <div className="container mx-auto mt-10">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D")' }}
                    >
                        <h1 className="text-white text-4xl mb-3 font-[poppins]">Welcome</h1>
                        <p className="text-white font-[poppins]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            suspendisse aliquam varius rutrum purus maecenas ac{" "}
                            <a href="#" className="text-purple-500 font-semibold">
                                Learn more
                            </a>
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4 font-[poppins]">Login</h2>
                        <p className="mb-4 font-[poppins]">
                            Sign in to your account. It’s free and only takes a minute.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>

                            <div className="mt-5 relative"> 
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'} 
                                    placeholder="Password"
                                    aria-label="Password"
                                    className="border border-gray-400 py-1 px-2 w-full"
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
                                <button
                                    type="submit"
                                    className={`w-full bg-purple-500 py-3 font-[poppins] text-xl text-center text-white ${loading ? 'opacity-50' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>

                            <div className="mt-5">
                                <span className='font-[poppins]'>
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-purple-500 font-semibold hover:underline">
                                        Register Here
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

export default Login;
