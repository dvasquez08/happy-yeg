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
        <meta
          name="description"
          content="Listing all of the happy hour specials of restaurants across the city of Edmonton"
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Happy YEG" />
        <meta
          property="og:description"
          content="A website that lists all the happy hour specials of restaurants across the city of Edmonton"
        />
        <meta property="og:image" content={happyLogo} />
        <meta property="og:url" content="https://happyyeg.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={happyLogo} />
        <meta name="twitter:title" content="Happpy YEG" />
        <meta
          name="twitter:description"
          content="Listing all of the happy hour specials of restaurants across the city of Edmonton"
        />
        <meta name="twitter:image" content={happyLogo} />
      </Helmet>
      <NavBar setSearchTerm={setSearchTerm} openContactForm={openContactForm} />
      <div className="text-4xl flex items-center justify-center my-6 flex-col">
        <h1 className="my-4">Welcome to Happy YEG</h1>
        <img src={happyLogo}></img>
      </div>
      <div id="top" className="flex flex-col justify-center px-8">
        <p className="mb-4">
          These days, time are tough. It's getting harder to spend money when
          you go out especially with prices going higher, but it doesn't mean
          you can't go out and celebrate without breaking the bank! Take
          advantage of happy hours to save you money while still being able to
          go out.
        </p>
        <p>
          Don't know what the happy hour specials are in the restaurants in your
          area? Don't sweat, that's what this site is for! Here's a list of
          happy hours throughout the city of Edmonton. This list will grow as
          more research is done and I will update as things change. Have a look,
          and I hope you find a great place close to you!
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
