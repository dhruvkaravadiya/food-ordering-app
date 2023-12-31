import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRestaurants } from "../../Redux/Slices/restaurantSlice.js";
import RestaurantCard from "../../Components/Restaurant/RestaurantCard.jsx";
import RestaurantListShimmer from "../Shimmer/RestaurantListShimmer.jsx";
import RestaurantCardShimmer from "../Shimmer/RestaurantCardShimmer.jsx";

const RestaurantList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { restaurantData } = useSelector((state) => state?.restaurant);

  async function loadRestaurants() {
    if (restaurantData.length == 0) {
      await dispatch(getAllRestaurants());
    }
  }

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap gap-11 mt-10">
      {restaurantData.length == 0 ? (
        <RestaurantCardShimmer />
      ) : (
        // <div>Loading</div>
        <React.Fragment>
          {restaurantData.map((restaurant) => {
            return <RestaurantCard key={restaurant._id} resdata={restaurant} />;
          })}
        </React.Fragment>
      )}
    </div>
  );
};

export default RestaurantList;
