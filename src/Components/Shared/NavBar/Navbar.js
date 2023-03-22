import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/logo.png'
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { useDarkMode } from '../../../utils/useDarkMode';

const Navbar = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className="navbar bg-green-100 dark:bg-[#1b222d] dark:text-white h-[70px]">
                    <div className="flex-1 md:pl-10 md:mx-2">
                        <Link href="/">
                            <div className='dark:bg-white my-4 rounded-lg'>
                                <img className='dark:bg-white mx-2 py-1 ' src={logo}
                                    alt="bari koi"
                                    width="100px"
                                    height="100px" />
                            </div>

                        </Link>
                    </div>



                    <div className="hidden px-2 mx-2 lg:flex">
                        <div className="flex items-center">
                            <Link href='/'>
                                <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">Home</h1>
                            </Link>
                            <Link href='/'>
                                <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">PRODUCTS</h1>
                            </Link>
                            <Link href='/'>
                                <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">DEVELOPER</h1>
                            </Link>
                            <Link href='/'>
                                <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">PRICING</h1>
                            </Link>




                        </div>
                    </div>

                    {/* theme controller */}
                    <div className='items-center flex md:pr-10'>
                        <span className='px-2 text-slate-700 dark:text-slate-200'> <FaMoon /></span>
                        {
                            isDarkMode ? <input type="checkbox" className="toggle bg-green-600" onChange={toggleDarkMode} /> :
                                <input type="checkbox" className="toggle bg-green-600" defaultChecked onChange={toggleDarkMode} />
                        }
                        <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                    </div>


                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                            <li>
                                <Link href='/'>
                                    <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2">HOME </h1>
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link href="/courses">
                                    <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">PRODUCTS</h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forum">
                                    <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">DEVELOPER </h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="/code-editor">
                                    <h1 className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">PRICING </h1>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;