 import React, {useState} from "react";
import { Link } from "react-router-dom";
import FilterIcon from "../../images/FilterIcon.png";
import Card from "../Card";
import { PlaceToStayData,PlaceToStayFilters } from "../../data/PlaceToStayData";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Wallet from "../Wallet";

const PlaceToStay = () => {
    const [modal, setModal] = useState(false);

  
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <>
   
    <Navbar handleModal={handleModal} />
    <div className="py-8 lg:py-[3rem] px-2 lg:px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center text-sm lg:w-[90%] mx-auto mb-[2rem]">
                <div className="flex justify-between flex-nowrap w-full lg:scrollbar-hide scroll-smooth mb-4 lg:mb-0 py-4">
                    {PlaceToStayFilters.map((item,id) =>(
                        <Link key={id} to={item.link} className="text-xs whitespace-nowrap mx-4">{item.name}</Link>
                    ))}
                </div>
                <div className="ml-10 flex items-center border border-[#B4B4B4] px-4 py-1 rounded-[4px]">
                    <span className="mr-6 text-xs"> Location </span>
                    <img src={FilterIcon} alt="filter" className="h-[15px]" />
                </div>
        </div>
        <div className="flex flex-wrap gap-[15px] justify-center">
				{PlaceToStayData.map((item, id) => (
					<Card item={item} key={id} />
				))}
			</div>
    </div>
    <Footer />
    {modal && (
		  <Wallet setModal={setModal} />
		)}
    </>
  )
}

export default PlaceToStay;