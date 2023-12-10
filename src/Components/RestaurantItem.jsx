import React from "react";

const RestaurantItem = ({ restaurant }) => (
  <>
    <div className="ml-4 w-11/12 py-4 flex grid justify-items-start">
      <li key={restaurant.id}>
        <div className="bg-neutral-200 p-4 rounded-md">
          <h2 className="font-bold">{restaurant.name}</h2>
          {Array.isArray(restaurant.filteredLocations) ? (
            <div className="flex flex-row">
              {restaurant.filteredLocations.map((location, index) => (
                <p key={index}>
                  <span className="mr-2">{location}</span>
                </p>
              ))}
            </div>
          ) : (
            <p>{restaurant.location}</p>
          )}
          {Array.isArray(restaurant.locationAddresses) ? (
            <div className="my-4">
              {restaurant.locationAddresses.map((address, index) => (
                <p key={index}>{address}</p>
              ))}
            </div>
          ) : (
            <p>{restaurant.address}</p>
          )}
          <p>
            <span className="font-semibold">Business Hours: </span>
            {restaurant.businessHours}
          </p>
          <p>
            <span className="font-semibold">Happy Hour: </span>
            {restaurant.happyhour}
          </p>
          <p className="mt-4">
            <span className="font-semibold">Drink Specials: </span>
            {restaurant.drinkSpecials}
          </p>
          <p className="mt-4">
            <span className="font-semibold">Food Specials: </span>
            {restaurant.foodSpecials}
          </p>
          <p className="mt-4">
            <span className="font-semibold">Additional Notes: </span>
            {restaurant.notes}
          </p>
        </div>
      </li>
    </div>
  </>
);

export default RestaurantItem;
