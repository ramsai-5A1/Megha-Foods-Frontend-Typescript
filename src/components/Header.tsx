import {CATEGORIES, COMPANY_LOGO} from "../helper/constants"
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { BsCartDashFill } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [field, setField] = useState(1);


    const handleOnClick = (id: number) => {
        setField(id);
    }

    const handleOnMouseEnter = () => {
        setField(2);
        setIsOpened(true);
    }

    const handleOnMouseLeave = () => {
        setField(-1);
        setIsOpened(false);
    }

    return (
        <div className="h-50 bg-white flex flex-col shadow-lg">
            <div className="flex items-center justify-between">
                <img className="w-50 h-36 pl-10 p-2 m-1 " alt="logo" src={COMPANY_LOGO}/>

                <div>
                    <input className="w-72 h-10 border-black rounded-l-full border p-2" type="text" placeholder="Search for"/>
                    <button className="w-20 h-10 border rounded-r-full border-black bg-gray-500 hover:cursor-pointer hover:bg-gray-50">Search</button>
                </div>

                <div className="flex space-x-5 items-center pr-16">
                    <div className="flex space-x-2 items-center hover:cursor-pointer">
                        <CgProfile className="w-8 h-8"/>
                        <div className="flex flex-col">
                            <span className="font-bold">Account</span>
                            <span className="font-semibold text-sm">Login/Register</span>
                        </div>
                    </div>

                    <FaHeart className="w-5 h-5 hover:cursor-pointer"/>
                    <BsCartDashFill className="w-5 h-5 hover:cursor-pointer"/>

                    <div className="flex items-center hover:cursor-pointer">
                        <FaIndianRupeeSign className="w-3 h-3"/>
                        <span>0.00</span>
                    </div>
                </div>
            </div>

            <div >
                <ul className="flex space-x-4 p-2 justify-center font-bold">
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 1 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(1)}>
                        <Link to="/">HOME</Link>
                    </li>

                    <li onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="" onClick={() => handleOnClick(2)}>
                        <div className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 mt-2 ml-2 mr-2 ${field == 2 ? 'bg-blue-950 text-white' : 'bg-white'}`}>
                            <Link className="flex space-x-3 items-center" to="/product-category">
                                <span className="">SHOP BY CATEGORY </span>
                                {isOpened ? <FaAngleUp/> : <FaAngleDown/>}
                            </Link>
                        </div>
                        <div className="pl-2">
                            {isOpened && <DropDownMenu/>}
                        </div>
                        
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 3 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(3)}>
                        <Link to="/about-us">ABOUT US</Link>
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 4 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(4)}>
                        <Link to="/event-bulk-orders">EVENT/BULK ORDERS</Link>
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 5 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(5)}>
                        <Link to="/gifting">GIFTING</Link>
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 6 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(6)}>
                        <Link to="/suggest">SUGGEST</Link>
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 7 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(7)}>
                        <Link to="/testimonials">TESTIMONIALS</Link>
                    </li>

                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 8 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(8)}>
                        <Link to="/contact-us">CONTACT US</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

const DropDownMenu = () => {
    return (
        <div className="">
            <div className="bg-white text-black absolute w-52">
                <ul className="flex flex-col">
                    {CATEGORIES.map((category, index) => <li key={index}><CardRow text={category}/></li>)}
                </ul>
            </div>
        </div>
    )
}

const CardRow = (props: {text: string}) => {

    return (
        <div className="bg-gray-200 border-t border-b p-2 hover:cursor-pointer hover:bg-blue-950 hover:text-white w-full">
            <span>{props.text}</span>
        </div>
    )
}

export default Header