import React from "react";
import Hero from "../components/homeComponents/Hero";
import Divider from "../components/homeComponents/Divider";
import Collection from "../components/homeComponents/Collection";
import Moreinfo from "../components/homeComponents/Moreinfo";

function Home() {
  return (
    <div>
      <Hero />
      <Divider />
      <Collection />
      <Moreinfo />
    </div>
  );
}

export default Home;
