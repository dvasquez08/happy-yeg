import React from "react";

const RestaurantItem = ({ restaurant }) => (
  <li key={restaurant.id}>
    <h2>{restaurant.name}</h2>
    <p>{restaurant.location}</p>
    <p>{restaurant.address}</p>
    <p>{restaurant.businessHours}</p>
    <p>{restaurant.specials}</p>
  </li>
);

export default RestaurantItem;
