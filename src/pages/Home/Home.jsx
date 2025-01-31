import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Houses from '../Houses/Houses';
import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div className='flex flex-col'>
        <Hero></Hero>
        <Slider></Slider>
        <Houses></Houses>
        <Stats></Stats>
        </div>
    );
};

export default Home;