import React, { useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentRestaurant } from "../../Redux/Slices/restaurantSlice.js";

const RestaurantCard = ({ resdata }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onCardClick(e) {
    dispatch(updateCurrentRestaurant(resdata));
    navigate("/restaurant/details");
  }

  return (
    <div
      onClick={onCardClick}
      className="w-96 h-auto flex flex-col gap-2 cursor-pointer rounded-lg font-custom hover:shadow-xl bg-white p-4 border border-gray-200"
    >
      <img
        alt="resPhoto"
        src={resdata?.photo?.photoUrl}
        className="w-96 h-60 rounded-md"
      />
      <div className="flex items-center justify-between m-2 p-1 text-white">
        <div className="text-base text-gray-600  font-semibold">
          {resdata?.restaurantName}
        </div>
        <div className="bg-green-500 w-10 h-6 rounded-full flex items-center justify-evenly p-1">
          <p className="text-sm">4.4</p>
          <MdOutlineStar />
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between p-1">
        <div>
          {resdata?.cuisines?.map((cuisine) => {
            return (
              <span
                key={cuisine}
                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
              >
                {cuisine}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
