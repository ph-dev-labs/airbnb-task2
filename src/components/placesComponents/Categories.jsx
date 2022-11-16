import React, { useState } from "react";

const places = [
  "Restaurant",
  "Cottage",
  "Castle",
  "fantast city",
  "beach",
  "Cabins",
  "Off-grid",
  "Farm",
];
function Categories() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex xsx:mt-10 mt-20 gap-10 xsx:gap-0 xsx:px-10 xsx:justify-evenly items-center justify-between px-20 smx:px-16 w-full">
      <ul className="flex gap-12 mdx:gap-8 xsx:hidden  ">
        <li>Restaurant</li>
        <li className="xsx:hidden">Cottage</li>
        <li className="smx:hidden">Castle</li>
        <li className="mdx:hidden">fantast city</li>
        <li className="llgx:hidden">beach</li>
        <li className="lgx:hidden">Cabins</li>
        <li className="xxl:hidden">Off-grid</li>
        <li className="xlx:hidden">Farm</li>
      </ul>

      <div className=" relative xsx:w-9/12 ">
        <button
          onClick={(e) => setIsActive(!isActive)}
          className="xsx:w-full xxl:justify-evenly flex gap-8 items-center rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          <p>Location</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>

        {isActive && (
          <div>
            <div
              class="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <ul>
                  {places.map((place) => {
                    return (
                      <li
                        className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        onClick={(e) => setIsActive(!isActive)}
                      >
                        {place}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
