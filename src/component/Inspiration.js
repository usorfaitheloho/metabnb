import React from "react";
import Card from "./Card";
import { InspirationData } from "./InspirationData";

const Inspiration = () => {
	return (
		<div className="py-8 px-2 lg:px-8 max-w-[1200px] mx-auto">
			<h1 className="text-center text-[1.4rem] lg:text-[2rem] font-bold mb-8">
				Inspiration for your next adventure
			</h1>
			<div className="flex flex-wrap gap-[10px] lg:gap-[15px] justify-center">
				{InspirationData.map((item, id) => (
					<Card item={item} key={id} />
				))}
			</div>
		</div>
	);
};


export default Inspiration;