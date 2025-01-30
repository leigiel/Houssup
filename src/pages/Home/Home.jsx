import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Houses from '../Houses/Houses';
import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div className='bg-blue-200 border border-black m-3 flex flex-col gap-5'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Slider></Slider>
        <Houses></Houses>
        <Stats></Stats>
        <Footer></Footer>
        </div>
    );
};

export default Home;