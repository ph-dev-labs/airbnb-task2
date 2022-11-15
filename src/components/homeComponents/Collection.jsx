import React from "react";
// import Card from "./components/Card";
import Card from "../Card";

const images = [
  "images/card-1.svg",
  "images/card-2.svg",
  "images/card-3.svg",
  "images/card-4.svg",
  "images/card-5.svg",
  "images/card-6.svg",
  "images/card-7.svg",
  "images/card-8.svg",
];

function Collection() {
  return (
    <div className="xsx:mx-14 mx-20 my-14">
      <h1 className=" text-4xl font-bold text-center">
        Inspiration for your next adventure
      </h1>
      <div className="grid xsx:grid-cols-1 lgx:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {images.map((image) => {
          return <Card img={image} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
