import React from "react";

function ButtonGroup({ handleFilter }) {
  return (
    <>
      <h1 className="text-3xl flex items-center justify-center my-4">
        Select Location
      </h1>
      <p className="flex items-center justify-center my-3">
        Select a location below to find a restaurant in the area of your choice.
      </p>
      <div className="flex justify-evenly">
        <button
          onClick={() => handleFilter("North Side")}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          North
        </button>
        <button
          onClick={() => handleFilter("West Side")}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          West
        </button>
        <button
          onClick={() => handleFilter("South Side")}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          South
        </button>
        <button
          onClick={() => handleFilter("Downtown")}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Downtown
        </button>
      </div>
    </>
  );
}

export default ButtonGroup;
