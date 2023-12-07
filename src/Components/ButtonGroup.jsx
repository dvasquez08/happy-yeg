import React from "react";

function ButtonGroup({ handleFilter }) {
  return (
    <>
      <h1 className="text-3xl flex items-center justify-center my-4">
        Select Location
      </h1>
      <p className="flex items-center justify-center my-3 px-8">
        Select a location below to find a restaurant in the area of your choice.
      </p>
      <div className="flex justify-evenly">
        <button
          onClick={() => handleFilter("North Side")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          North
        </button>
        <button
          onClick={() => handleFilter("West Side")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          West
        </button>
        <button
          onClick={() => handleFilter("South Side")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          South
        </button>
        <button
          onClick={() => handleFilter("Downtown")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Downtown
        </button>
      </div>
    </>
  );
}

export default ButtonGroup;
