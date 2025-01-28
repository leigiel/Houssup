import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Houses from '../Houses/Houses';
import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div className='border border-black m-3 flex flex-col gap-5'>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className='ms-10'><Slider></Slider></div>
        <Houses></Houses>
        <Stats></Stats>
        <Footer></Footer>
        </div>
    );
};

export default Home;