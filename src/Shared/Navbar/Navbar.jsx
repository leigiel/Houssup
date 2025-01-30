import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userProfile from '../../assets/UserProfile.png'

const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>Update Profile</NavLink></li>
        <li><NavLink>User Profile</NavLink></li>
        <li><NavLink>Login</NavLink></li>
        <li><NavLink>Logout</NavLink></li>
        

    </>
    return (
       
        <div className="navbar bg-blue-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <h1 className='logo-font text-4xl'>Houssup</h1>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end gap-2">
            <img className='h-10' src={userProfile} alt="" />
        <Link to='/login'><button className="btn btn-neutral px-7">Login</button></Link>
        </div>
      </div>
       
    );
};

export default Navbar;