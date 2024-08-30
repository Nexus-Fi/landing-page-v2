import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import EarlyAccess from "./EarlyAccess";
import Architecture from "./Architecture";
import Roadmap from "./Roadmap";

const Home : React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
     <Hero/>
     <Features/>
     <EarlyAccess/>
     <Architecture/>
     <Roadmap/>
    </main>
  );
}

export default Home;
