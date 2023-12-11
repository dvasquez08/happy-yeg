import React, { useState, useEffect } from "react";
import ButtonGroup from "./Components/ButtonGroup";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RestaurantItem from "./Components/RestaurantItem";
import happyLogo from "./assets/happylogo.jpg";
import { Helmet } from "react-helmet";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeFilter, setActiveFilter] = useState([null]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("restaurants.json")
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
      const filtered = restaurants.filter((restaurant) => {
        if (Array.isArray(restaurant.filteredLocations)) {
          return restaurant.filteredLocations.includes(location);
        } else {
          return restaurant.location === location;
        }
      });
      setFilteredRestaurants(filtered);
      setActiveFilter(location);
    }
  };

  useEffect(() => {
    console.log("Search Term:", searchTerm);
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Restaurants:", filtered);
    setFilteredRestaurants(filtered);
  }, [searchTerm, restaurants]);

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Happy YEG | Happy Hour List for Edmonton Restaurants</title>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </Helmet>
      <NavBar setSearchTerm={setSearchTerm} openContactForm={openContactForm} />
      <div className="text-4xl flex items-center justify-center my-6 flex-col">
        <h1 className="my-4">Welcome to Happy YEG</h1>
        <img src={happyLogo}></img>
      </div>
      <div id="top" className="flex flex-col justify-center px-8">
        <p className="mb-4">
          These days, it's getting harder to spend money going out when food
          prices keep getting higher, but it doesn't mean you can't go out and
          celebrate without breaking the bank! Take advantage of happy hours to
          save money while still being able to go out.
        </p>
        <p className="mb-4">
          Don't know what the happy hour specials are in the restaurants in your
          area? Don't sweat, that's what this site is for! Here's a list of
          happy hours throughout the city of Edmonton. This list will grow as
          more research is done and more restaurants are discovered. I will
          update as things change and will also be adding daily specials soon as
          some of these places have some really good ones. Have a look, and I
          hope you find a great place close to you!
        </p>
        <p>
          I'll try to keep everything as up to date as I can, but if there's
          something needs updating, or if you'd like to let me know about a
          restaurant that should be on the list let me know! Send me a message
          through the contact form in the menu. If there's a restaurant you want
          to look for, try a search in the search bar, also in the menu.
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
