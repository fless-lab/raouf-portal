import React from "react";
import Awards from "./awards/awards"
import Featured from "./featured/featured"
import Hero from "./hero/hero"
import Location from "./location/location"
import Price from "./price/price"
import Recent from "./recent/recent"
import Team from "./team/team"

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      {/* <Location /> */}
      <Team />
      {/* <Price /> */}
    </>
  );
}

export default Home;
