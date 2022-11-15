import React from "react";
import { FooterData,FooterSocials } from "../data/FooterData";
import Logo from "../images/LogoMetabnb.png";
import Copyright from "../images/Copyright.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#1D1D1E] text-white">
			<div className="flex flex-wrap gap-[1.5rem] px-4 md:px-10 justify-between lg:w-[80%] max-w-[1200px] mx-auto py-10">
				<div className="flex flex-col w-full items-center md:w-fit">
					<a href="#top">
						<img
							src={Logo}
							alt="Logo"
							className="h-[15px] md:h-[20px] lg:h-[30px] lg:mb-[3rem] mb-6"
						/>
					</a>
					<div className="flex justify-center w-full">
						{FooterSocials.map((item, id) => (
							<Link to={item.link} key={id}>
								<img
									src={item.name}
									key={id}
									alt="Social Icon"
									className="lg:mr-8 mx-2 lg:mb-[3rem] mb-6 h-[10px] lg:h-[20px]"
								/>
							</Link>
						))}
					</div>
					<div className="flex items-center">
						<img src={Copyright} alt="Copyright" className="h-[10px]" />
						<p className="lg:ml-3 ml-1 text-xs">2022 Metabnb</p>
					</div>
				</div>
				{FooterData.map((item, id) => (
					<div key={id} className="flex flex-col items-start">
						<span className="font-bold mb-3 text-sm lg:text-base">{item.title}</span>
						{item.sublinks.map((link, id) => (
							<Link key={id} to={link.link} className="text-[10px] lg:text-xs my-2">
								{link.name}
							</Link>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Footer;