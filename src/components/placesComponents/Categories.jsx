import React from "react";

function Categories() {
  return (
    <div className="flex mx-20 mt-20 justify-between">
      <ul className="flex space-x-10">
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Cabins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div className=" relative ">
        <button className="flex items-center space-x-4 rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <p>Location</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute top-0 right-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Categories;
