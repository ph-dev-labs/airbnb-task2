import React from "react";

function Moreinfo() {
  return (
    <div className="bg-primary px-20 pt-28 pb-20 flex smx:flex-col smx:items-center  justify-between">
      <div className="space-y-12 w-2/6 mt-10 smx:w-full">
        <h1 className="text-4xl font-bold text-white smx:text-center">
          Metabnb NFTs
        </h1>
        <p className="text-white tex-lg">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs give our customers
          access to loads of our exclusive services.
        </p>
        <button className="bg-white rounded-lg px-6 py-2 text-primary text-sm xsx:order-last xmx:w-full">
          Learn more
        </button>
      </div>
      <div className="w-5/12 smx:w-full">
        <img src="images/3-images.svg" alt="nft-images" />
      </div>
    </div>
  );
}

export default Moreinfo;
