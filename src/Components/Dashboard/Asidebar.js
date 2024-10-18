import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

function Asidebar() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (typeof logout === 'function') {
          
            logout();
            toast.success('Logout successful!', { autoClose: 3000 });
            navigate('/');
        } else {
            console.error('Logout is not a function. Check AuthContext.');
        }
    };

    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/layout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/userprofile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3 whitespace-nowrap">User Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3 whitespace-nowrap">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3 whitespace-nowrap">Coupons</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3 whitespace-nowrap">Order History</span>
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3 whitespace-nowrap">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Asidebar;
