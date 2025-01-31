import React, { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [value, setValue] = useState(4); // Initial state to show only 4 houses
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewAll, setViewAll] = useState(false);
    const housesPerPage = 9; // Show 9 houses per page

    useEffect(() => {
        fetch('https://api2-kohl.vercel.app/allhouses')
            .then(res => res.json())
            .then(data => {
                setHouses(data);
                setLoading(false);
            });
    }, []);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * housesPerPage;
    const displayHouses = viewAll 
        ? houses.slice(startIndex, startIndex + housesPerPage)
        : houses.slice(0, value);

    if (loading) {
        return <div>Loading...</div>;
    }

    const showPreviousPageButton = currentPage > 1;
    const showNextPageButton = viewAll && (startIndex + housesPerPage < houses.length);
    const showMoreButton = !viewAll && (houses.length > value);

    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-center font-bold text-4xl border border-black shadow-lg text-black py-3 rounded-xl'>Houses Available</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Ratione ipsum adipisci exercitationem consequuntur error nulla recusandae assumenda, tempora optio! Nisi!</p>
            <div className={viewAll ? 'mt-10 grid grid-cols-3 gap-10' : 'mt-10 grid grid-cols-2 gap-10'}>
                {displayHouses.length ? displayHouses.map(house => <House key={house._id} house={house}></House>) : 
                    <div className={viewAll ? 'grid grid-cols-3 gap-10' : 'grid grid-cols-2 gap-10'}>
                         <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }
            </div>
            <div className='mt-5 flex justify-center'>
                {showMoreButton && 
                    <button className='btn btn-primary' onClick={() => { setViewAll(true); setValue(housesPerPage); }}>Show More</button>
                }
                {!showMoreButton && viewAll &&
                    <button className='btn btn-primary' onClick={() => { setViewAll(false); setCurrentPage(1); setValue(4); }}>Show Fewer</button>
                }
            </div>
            {viewAll && (
                <div className='mt-5 flex justify-center'>
                    {showPreviousPageButton && 
                        <button className='btn btn-primary mx-2' onClick={handlePreviousPage}>Previous Page</button>
                    }
                    {showNextPageButton && 
                        <button className='btn btn-primary mx-2' onClick={handleNextPage}>Next Page</button>
                    }
                </div>
            )}
        </div>
    );
};

export default Houses;
