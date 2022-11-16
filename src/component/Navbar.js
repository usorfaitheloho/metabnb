import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo.png";
import Data from "../data/NavItems";

const Navbar = ({handleModal}) => {
    const data = Data;
    const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen)
	}

	const handleFunctions = () => {
        handleMenuOpen()
        handleModal()
      }
	
	   

  return (
        <nav className="bg-white border-gray-200 px-2 pt-4 md:px-4 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
             
            <span class="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-[15px] md:h-[20px] lg:h-[30px]" />
                </Link>
            </span>
                <div className={`${menuOpen ? "visible bottom-0 flex flex-col lg:flex-row pt-16 gap-y-12 items-center lg:gap-y-0 fixed lg:static w-[100%] h-full lg:w-max right-0 lg:h-max top-16 bottom-0 bg-[#A02279] text-white z-8 transition-all duration-1000 ease-in-out lg:transition-none" : "hidden justify-between -right-full" } w-[40%] lg:justify-between md:flex text-white lg:text-[#434343] text-sm`}>
                    {data && data.map((item) => (
                        <ul key={item.id}>
                        <li><Link to={item.href} onClick={handleMenuOpen}>{item.name}</Link></li>
                        </ul>
                    ))}
					 <span className="lg:hidden flex  md:w-auto">
                    <button type="button" className="rounded-[10px] bg-[#fff] px-[21px] py-[12px] text-[#A02279]" onClick={handleFunctions}>Connect wallet</button>
                </span>
                </div>
                <span className="hidden md:flex md:w-auto">
                    <button type="button" className="rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]" onClick={handleModal}>Connect wallet</button>
                </span>
                    <span class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button" onClick={handleMenuOpen}>
							{menuOpen ? ( <FontAwesomeIcon icon={faTimes} size='2x' className="text-[#A02279] hover:text-rose-500 "/> ) : (<FontAwesomeIcon icon={faAlignRight} size='2x' className="text-[#A02279] hover:text-rose-500 "/>)}
						</button>
					</span> 
                  
                     
            </div>
            
        </nav>

  )
}

export default Navbar;