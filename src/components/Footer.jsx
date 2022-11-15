import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="smx:mx-9 mx-20 pt-14 pb-9">
        <div className=" flex justify-between smx:flex-col">
          <div className="flex flex-col justify-between">
            <div id="logo" className="w-56">
              <img src="images/logo-2.svg" alt="" />
            </div>
            <div id="socials" className="flex space-x-5">
              <img src="images/facebook.svg" alt="facebook-icon" />
              <img src="images/instagram.svg" alt="instagram-icon" />
              <img src="images/twitter.svg" alt="twitter-icon" />
            </div>
          </div>
          <div className="flex justify-between w-7/12 smx:w-full smx:mt-9">
            <div className="flex flex-col space-y-3">
              <p className="footer_text">Community</p>
              <a href="/" className="footer_link">
                NFT
              </a>
              <a href="/" className="footer_link">
                Tokens
              </a>
              <a href="/" className="footer_link">
                Landlords
              </a>
              <a href="/" className="footer_link">
                Discord
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="footer_text">Places</p>
              <a href="/" className="footer_link">
                Castle
              </a>
              <a href="/" className="footer_link">
                Farms
              </a>
              <a href="/" className="footer_link">
                Beach
              </a>
              <a href="/" className="footer_link">
                Learn more
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="footer_text">About us</p>
              <a href="/" className="footer_link">
                Road map
              </a>
              <a href="/" className="footer_link">
                Creators
              </a>
              <a href="/" className="footer_link">
                Career
              </a>
              <a href="/" className="footer_link">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 smx:text-center">
          <p className="text-base font-normal">&copy; 2022 Metabnb</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
