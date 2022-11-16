import React ,{useState} from "react";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Inspiration from "../Inspiration";
import Navbar from "../Navbar";
import NFTS from "../NFTS";
import Wallet from "../Wallet";



const Home = () => {
  const [modal, setModal] = useState(false);

  
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <>
    <Navbar handleModal={handleModal} />
    <HeroSection />
    <Inspiration />
    <NFTS />
    <Footer/>

    {modal && (
		  <Wallet setModal={setModal} />
		)}
    </>
    
  );
};

export default Home;