import React from "react";

const RestaurantItem = ({ restaurant }) => (
  <>
    <div className="ml-4 w-1/2 py-4 flex justify-center">
      <li key={restaurant.id}>
        <h2 className="font-semibold">{restaurant.name}</h2>
        <p>{restaurant.location}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.businessHours}</p>
        <p>{restaurant.specials}</p>
      </li>
    </div>
  </>
);

export default RestaurantItem;
