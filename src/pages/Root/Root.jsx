import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';


const Root = () => {
    return (
        <div className='bg-blue-200 border border-black m-3 flex flex-col gap-5'>
           <Navbar />
           <main>
            <Outlet />
           </main>
            <Footer />
        </div>
    );
};

export default Root;