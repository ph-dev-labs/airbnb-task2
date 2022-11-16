import React from "react";

function Divider() {
  return (
    <div className=" bg-primary ">
      <div className=" mx-28 py-2 flex justify-between  xsx smx:mx-auto smx:gap-2">
        <div className="md:w-52 mdx:w-24 flex items-center justify-center smx:w-full">
          <img src="images/mb-token.svg" alt="" className="w-8 xsx:w-5" />
          <p className="text-token mdx:text-xl xsx:text-base text-2xl font-bold tracking-wide">
            MBToken
          </p>
        </div>
        <div className="md:w-52 mdx:w-24 flex items-center justify-center space-x-2 smx:w-full">
          <img src="images/white-metamask.svg" alt="" className="w-7 xsx:w-4" />
          <p className="text-token mdx:text-lg xsx:text-sm text-xl font-extralight tracking-wider">
            METAMASK
          </p>
        </div>
        <div className="md:w-52 mdx:w-24 flex items-center justify-center space-x-2 smx:w-full">
          <img src="images/opensea.svg" alt="" className="w-7 xsx:w-4" />
          <p className="text-white mdx:text-xl xsx:text-base text-2xl font-bold tracking-tight ">
            OpenSea
          </p>
        </div>
      </div>
    </div>
  );
}

export default Divider;
