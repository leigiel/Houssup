import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    }, []);

    return (
        <div className='max-w-2xl mx-auto mt-10 flex items-center justify-center '>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
            >
                {houses.length ? (
                    houses.map(house => (
                        <SwiperSlide key={house._id}>
                            <House house={house} />
                        </SwiperSlide>
                    ))
                ) : (
                    Array.from({ length: 3 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
};

export default Slider;
