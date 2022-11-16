import React from "react";

function Moreinfo() {
  return (
    <div className="bg-primary px-20 pt-28 pb-20 flex smx:flex-col smx:items-center xsx:px-8 xsx:pt-14  justify-between">
      <div className="space-y-12 w-2/6 mt-10 smx:w-full smx:m-0 xsx:flex xsx:flex-col">
        <h1 className="text-4xl font-bold text-white smx:text-left">
          Metabnb NFTs
        </h1>
        <p className="text-white ">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs give our customers
          access to loads of our exclusive services.
        </p>
        <button className="bg-white rounded-lg px-6 py-2 text-primary text-sm xsx:order-last xmx:w-full smx:hidden">
          Learn more
        </button>
      </div>
      <div className="w-5/12 smx:w-full smx:mt-10 smx:mb-4 xsx:mx-auto">
        <img src="images/3-images.svg" alt="nft-images" />
      </div>
      <div className="sm:hidden">
        <button className="bg-white rounded-lg px-6 py-2 text-primary text-sm xsx:order-last xmx:w-full mt-6">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Moreinfo;
