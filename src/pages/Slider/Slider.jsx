import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import House from '../../pages/Houses/House';

const Slider = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('https://api2-kohl.vercel.app/allhouses')
            .then(res => res.json())
            .then(data => setHouses(data));

        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            navigation: true,
            pagination: { clickable: true },
        });
    }, []);

    return (
        <div className='max-w-6xl mx-auto'>
            <div className="swiper">
                <div className="swiper-wrapper">
                    {houses.length ? houses.map(house => (
                        <div className="swiper-slide" key={house._id}>
                            <House house={house} />
                        </div>
                    )) : (
                        <>
                            <div className="swiper-slide">
                                <div className="flex w-52 flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="flex w-52 flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="flex w-52 flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {/* Add Pagination and Navigation */}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
};

export default Slider;
