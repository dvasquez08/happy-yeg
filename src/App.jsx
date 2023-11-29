import React from "react";
import ButtonGroup from "./Components/ButtonGroup";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="text-4xl flex items-center justify-center">
        <h1>Happy YEG</h1>
      </div>
      <div>
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
      <ButtonGroup />
    </>
  );
}

export default App;
