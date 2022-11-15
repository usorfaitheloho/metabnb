import React from "react";
import NFTBanner from ""

const NFTS = () => {
  return (
    <div className="bg-[#A02279] text-white px-10 py-[3rem] lg:px-[5rem] lg:py-[5rem]">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto w-full">
            <div className="lg:w-[40%] mb-[5rem] md:mb-[3rem]">
                <h2 className="capitalize text-[2rem] mb-5 lg:mb-10 font-bold">
                    Metabnb NFTs
                </h2>
                <p className="text-sm mb-5 lg:mb-10 leading-[1.8]">
                     Discover our NFT gift cards collection. Loyal customers gets amazing  
                     gift cards which are traded as NFTs. These NFTs gives our customer 
                     access to loads of our exclusive services.
                </p>
                <button className="px-6 py-3 rounded-[10px] text-[#A02279] bg-white font-normal text-sm">
                    Learn more
                </button>
            </div>
            <div className="md:w-[70%] hidden mx-auto lg:block lg:w-[50%]">
                <img src={NFTBanner} alt="Banner" />
            </div>
        </div>
    </div>
  );
};

export default NFTS;