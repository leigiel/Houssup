import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../../LocalStorage/LocalStorage";

const HouseDetails = () => {
  const dataArray = useLoaderData();
  const values = dataArray[0];
  const { _id, house_title, description, rent, location,image, segment_name,area,facilities} = values || {}; 
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = getDataFromLocalStorage();
    const exists = data.find(da => da === _id);
    if (!exists) {
      setDataToLocalStorage(_id);
      navigate('/apply');
      toast("Applied Successfully");
    } else {
      toast.error('Already Exists');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mt-20 font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500">
        House Details
      </h2>

      <div className="grid grid-row-3 mt-20 gap-5">
        <div className=""> 
          <img src={image} alt="" />
        </div>
        <div className=" border-2 border-blue-300 p-10 rounded-xl">
          <h1 className="font-bold text-2xl">House Title</h1>
          <p className="text-xl mt-2">{house_title}</p>
          <hr className="border border-black mt-3" />
          <p className="text-xl mt-5 font-bold">Description</p>
          <p className="text-xl mt-2">{description}</p>
          <hr className="border border-black mt-3" />
        </div>
        <div className="border-2 border-blue-300 p-10 rounded-xl">
          <div>
            <p className="font-bold text-2xl mt-2">Type</p>
            <p className="text-xl font-semibold mt-3">{segment_name}</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">Area</p>
            <p className="text-xl font-semibold mt-3">{area}</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">Facilities</p>
            <p className="text-xl font-semibold mt-3">{facilities}</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">Rent</p>
            <p className="text-xl font-semibold mt-3">{rent}</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">Location</p>
            <p className="text-xl font-semibold mt-3">{location}</p>
          </div>

          <button className="btn bg-indigo-500 mt-5 px-10" onClick={handleSubmit}>
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HouseDetails;
