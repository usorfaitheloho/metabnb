import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Data from "./NavItems";

const Navigation = () => {
    const data = Data;
    const [nav, setNav] = useState(false);

    const handleNav = () => {
		setNav(!nav);
	};

  return (
        <nav className="bg-white border-gray-200 px-2 pt-4 md:px-4 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
             
            <span class="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-[15px] md:h-[20px] lg:h-[30px]" />
                </Link>
            </span>
                <div className="w-[40%] justify-between hidden md:flex text-[#434343] text-sm" id="navbar-cta">
                    {data && data.map((item) => (
                        <ul key={item.id}>
                        <li><Link to={item.href}>{item.name}</Link></li>
                        </ul>
                    ))}
                </div>
                <span className="hidden md:flex md:w-auto">
                    <button type="button" className="rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
                </span>
                    <span class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-8 h-8 text-gray-500 hover:text-rose-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</span> 
                    <div
				className={`p-4 text-white bg-[#A02279] fixed top-0 ${
					nav ? "left-0" : "left-[100%]"
				} duration-300 h-screen w-full overflow-hidden text-white`}>
				<div className='flex justify-end mb-[2rem]'>
					{/* <span className='text-[1.3rem]' onClick={handleNav}>
						<FaTimes />
					</span> */}
				</div>
				<div className='flex flex-col items-center'>
					{data.map((item, id) => (
						<Link
							onClick={handleNav}
							to={item.href}
							key={id}
							className='py-4 text-[1.3rem] font-light'>
							{item.name}
						</Link>
					))}
					{/* <button
						onClick={checkModal}
						className='mt-4 py-4 px-8 text-[1.1rem] font-light bg-white text-[#a02279] rounded-[10px]'>
						Connect Wallet
					</button> */}
				</div>
			</div>
                     
            </div>
            
        </nav>

  )
}

export default Navigation