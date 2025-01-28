import React, { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [value,setValue] = useState(6)
    const [houses,setHouses] = useState([])
    useEffect(()=>{
        fetch('https://api2-kohl.vercel.app/allhouses')
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[]) 
    return (
        <div className='max-w-6xl mx-auto mt-20'>
         <h2 className='text-center font-bold text-4xl border border-black shadow-lg text-black py-3 rounded-xl'>Houses Availble</h2>
         <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Ratione ipsum adipisci exercitationem consequuntur error nulla recusandae assumenda, tempora optio! Nisi!</p>
         <div className='mt-10 grid grid-cols-3 gap-10'>
         {

            houses.length?houses.slice(0,value).map(house=><House key={house._id} house={house}></House>):<div className="grid grid-cols-3 gap-96">
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
      
          
            {
                value === 6?<button className='btn btn-primary' onClick={()=>setValue(houses.length)}>View All</button>:<button className='btn btn-primary' onClick={()=>setValue(6)}>Show Four</button>
            }
        </div>
        </div>
    );
};

export default Houses;