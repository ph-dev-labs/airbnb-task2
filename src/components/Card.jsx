import React from "react";

function Card(props) {
  return (
    <div className="xsx:w-72 my-0 mx-auto">
      <div className="p-3.5 bg-collection_bg border border-solid border-collection rounded-2xl">
        <div className="mb-4 relative">
          <img src={props.img} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute top-2 right-2 fill-current text-collection outline-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="flex justify-between mb-2 whitespace-nowrap">
          <p className="small_text">Desert king</p>
          <p className="small_text font-bold">1MBT per night</p>
        </div>
        <div className="flex mb-2 ">
          <p className="small_text whitespace-nowrap">2345km away</p>
          <p className="small_text whitespace-nowrap">
            available for 2weeks stay
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-3.5 h-3.5 fill-current text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
