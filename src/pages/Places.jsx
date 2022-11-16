import React from "react";
import Card from "../components/Card";
import Categories from "../components/placesComponents/Categories";

const images = [
  "images/card-5.svg",
  "images/card-6.svg",
  "images/card-7.svg",
  "images/card-8.svg",
  "images/card-1.svg",
  "images/card-2.svg",
  "images/card-3.svg",
  "images/card-4.svg",
  "images/card-9.svg",
  "images/card-10.svg",
  "images/card-11.svg",
  "images/card-12.svg",
  "images/card-13.svg",
  "images/card-14.svg",
  "images/card-15.svg",
  "images/card-16.svg",
];

function Places() {
  return (
    <div>
      <Categories />
      <div className="px-20 smx:px-10 my-14 xsx:px-0">
        <div className="grid xsx:grid-cols-1 lgx:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => {
            return <Card img={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Places;
