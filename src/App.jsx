import React, { useState, useEffect } from "react";
import ButtonGroup from "./Components/ButtonGroup";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RestaurantItem from "./Components/RestaurantItem";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    fetch("/src/restaurants.json")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleFilter = (location) => {
    if (location === activeFilter) {
      setFilteredRestaurants(restaurants);
      setActiveFilter(null);
    } else {
      const filtered = restaurants.filter(
        (restaurant) => restaurant.location === location
      );
      setFilteredRestaurants(filtered);
      setActiveFilter(location);
    }
  };

  return (
    <>
      <NavBar />
      <div className="text-4xl flex items-center justify-center my-6">
        <h1>Happy YEG</h1>
      </div>
      <div className="px-8">
        <p>
          These days, time are tough. It's getting harder to spend money when
          you go out especially with prices going higher, but it doesn't mean
          you can't go out and celebrate without breaking the bank! Take
          advantage of happy hours to save you money while still being able to
          go out.
        </p>
        <p>
          Don't know what the happy hour specials are in the restaurants in your
          area? Don't sweat, that's what this site is for! Here's a list of
          happy hours throughout the city of Edmontont. This list will grow as
          more research is done and will update as things change. Have a look,
          and I hope you find a great place in your area!
        </p>
      </div>
      <ButtonGroup handleFilter={handleFilter} />
      <div>
        <h1 className="text-3xl flex items-center justify-center my-4">
          List of Restaurants
        </h1>
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
