import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import AuthService from "../services/auth.service";

function Header() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            // console.log(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    // console.log(currentUser.id);

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span></button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {/* <li className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
                            <Link to={`/profile/${currentUser.id}`}>Profile</Link>
                        </li> */}
                        {currentUser ? (
                            <li className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
                                <Link to={`/profile/${currentUser.id}`}>Profile</Link>
                            </li>
                        ) : (
                            console.log("no one!!!!!")
                        )}
                        <li className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
                            <Link to={'/create-account'}>New Account</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {currentUser ? (
                            <div>
                                <li className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
                                    <span className='text-white'>Welcome </span>
                                    <Link to={'/'}>{currentUser.lastName} {currentUser.firstName}</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link text-white" onClick={logOut}>
                                        LogOut
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <li className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
                                <Link to={'/'}>Sign In</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div >
        </nav >

    )
}

export default Header;