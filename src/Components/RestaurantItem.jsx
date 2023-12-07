import React from "react";

const RestaurantItem = ({ restaurant }) => (
  <>
    <div className="ml-4 w-11/12 py-4 flex grid justify-items-start">
      <li key={restaurant.id}>
        <div className="bg-neutral-200 p-4 rounded-md">
          <h2 className="font-semibold">{restaurant.name}</h2>
          <p>{restaurant.location}</p>
          <p>{restaurant.address}</p>
          <p>
            <span className="font-bold">Business Hours: </span>
            {restaurant.businessHours}
          </p>
          <p>
            <span className="font-bold">Happy Hour: </span>
            {restaurant.happyhour}
          </p>
          <p className="mt-4">
            <span className="font-bold">Drink Specials: </span>
            {restaurant.drinkSpecials}
          </p>
          <p className="mt-4">
            <span className="font-bold">Food Specials: </span>
            {restaurant.foodSpecials}
          </p>
        </div>
      </li>
    </div>
  </>
);

export default RestaurantItem;
