import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Header/Navigation";
import HeroSection from "../HeroSection";
import Inspiration from "../Inspiration";
import NFTS from "../NFTS";




const HomePage = () => {
  return (
    <>
    <Navigation />
    <HeroSection />
    <Inspiration />
    <NFTS />
    <Footer />
    </>
    
  );
};

export default HomePage;