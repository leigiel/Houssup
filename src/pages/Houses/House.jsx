import React from "react";
import { Link } from "react-router-dom";

const House = ({ house }) => {

  const { house_title,id, image, area, rent, location, } = house;
  return (
    <div className="border border-black rounded-4xl">
      <div className="p-5">
        <img className="h-[200px]" src={image} alt="" />
        <p className="text-xl font-bold">{house_title}</p>
        <p className="text-lg flex items-center gap-1 font-semibold">{area}</p>

        <p className="text-lg flex items-center gap-1 font-semibold">{rent}</p>
        <p className="text-lg font-semibold flex items-center">{location}</p>
 
       <Link to={`/allhouses/${id}`}><button className="btn btn-primary mt-3">House Details</button></Link>
      </div>
    </div>
  );
};

export default House;
