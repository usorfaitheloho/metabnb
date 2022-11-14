import React from "react";
import Group1 from "../images/Group1.png";
import sponsor1 from "../images/sponsor1.png";
import sponsor2 from "../images/sponsor2.png";
import sponsor3 from "../images/sponsor3.png";


const HeroSection = () => {
  return (
    <>
     <div className="pt-10 px-4 lg:px-8 py-4 lg:py-[3rem] max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <div className="md:w-[70%] lg:w[45%] text-center lg:text-left">
        <h1 className="text-[2rem] lg:text-[3.0rem] mb-8">
          <span>Rent a </span>
          <span className="text-[#A02279]">Place </span>
          <span>away from </span>
          <span className="text-[#A02279]">Home </span>
          <span>in the </span>
          <span className="text-[#A02279]">Metaverse </span>
        </h1>
            <p className="lg:w-[65%] mb-8 text-sm">
            we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
            </p>
           <div>
              <form className="flex">
                    <input
                        type="text"
                        placeholder="Search for location" 
                        className="p-3 lg:p-4 w-[40%] outline-none border rounded-tl-[10px] rounded-bl-[10px] border-[#A3A3A3] text-xs"
                    />
                    <button className='px-6 lg:py-3 w-[40%] rounded-tr-[10px] rounded-br-[10px] bg-[#A02279] text-white font-normal text-xs lg:text-sm'>
                        Search
                  </button>
              </form>
           </div> 
         
        </div>
        <div className="md:w-[45%] flex sm:w-48 md:block py-4">
                <img src={Group1} alt="Group1" />
          </div>
     </div>
     <div className='flex bg-[#A02279] my-2 p-2'>
				<div className="lg:w-[80%] w-full mx-auto flex justify-between items-center max-w-[1200px]">
					<img src={sponsor1} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
					<img src={sponsor2} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
					<img src={sponsor3} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
				</div>
			</div>
    </>
  )
}

export default HeroSection