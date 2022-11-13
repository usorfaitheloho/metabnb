import React from "react";


const HeroSection = () => {
  return (
    <>
     <div className="pt-10 px-4 lg:px-8 py-4 lg:py-[3rem] max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <div className="md:w-[70%] lg:w[45%] text-center lg:text-left">
            <h1 className="text-[2rem] lg:text[2.5rem]">
              <span> Rent a </span>
              <span className="text-[#A02279]"> Place </span>
              <span> away from </span>
              <span className="text-[#A02279]"> Home </span>
              <span> in the </span>
              <span className="text-[#A02279]"> Metaverse</span>
            </h1>
            <p className="lg:w-[85%] mb-8 text-sm">
            we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
            </p>
           <div>
              <form className="flex">
                <input
                    type="text"
                    placeholder="Search for location" 
                    className="p-3 lg:p-4 w-[60%] outline-none border rounded-tl-[10px] rounded-bl-[10px] border-[#A3A3A3] text-xs"
                />
                <button className='px-6 lg:py-3 w-[40%] rounded-tr-[10px] rounded-br-[10px] bg-[#A02279] text-white font-normal text-xs lg:text-sm'>
								Search
							</button>
              </form>
           </div>  
        </div>
     </div>
    </>
  )
}

export default HeroSection