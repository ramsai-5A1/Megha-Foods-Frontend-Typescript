import { IoStarSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { BsCartDashFill } from "react-icons/bs";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import TOP_PRODUCT_DATA from "../helper/topProductsMock.json"


const TopProducts = () => {
    const receipeSlide = useRef(null);

    useEffect(() => {
        // need to do an api call to fetch all receipes information
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,  
        autoplay: true,
        autoplaySpeed: 3000,  
        prevArrow: <PrevArrow receipeSlide={receipeSlide}/>,
        nextArrow: <NextArrow receipeSlide={receipeSlide}/>    
      };


    return (
        <div className="bg-black text-white">
            <div className="flex justify-center p-2">
                <span className="font-bold text-lg">Top Products</span>
            </div>
            <Slider ref={receipeSlide} {...settings}>
                {TOP_PRODUCT_DATA.TOP_RECEIPIES.map((value) => <TopProductCard key={value.id} data={value}/>)}
            </Slider>
        </div>
    )
}

const TopProductCard = ({data}) => {
    return (
        <div className="bg-white hover:cursor-pointer text-black flex flex-col items-center w-80 border border-black shadow-lg p-4 m-4 rounded-lg">
            <img className="w-80 h-80" alt="receipe-pic" src={data.imageUrl}/>
            <div className="flex space-x-3 p-2 m-2 items-center">
                <div className="flex space-x-1">
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                </div>
                <span>({data.reviews} reviews)</span>
            </div>

            <div className="flex flex-col items-center">
                <span className="text-lg font-bold">{data.title}</span>
                <span className="text-sm font-semibold">Made Fresh Every Day</span>
            </div>

            <div className="text-red-700 flex flex-col items-center">
                <span className="flex items-center ">
                    <MdCurrencyRupee/>
                    {data.min_price}.00 -
                    <MdCurrencyRupee/>
                    {data.max_price}.00
                </span>
                <span>(Inclusive of tax & Free shipping in India)</span>
            </div>

            <button className="bg-yellow-500 rounded-md w-1/2 p-2 m-2 flex space-x-2 items-center justify-center text-black">
                <BsCartDashFill/>
                <span>Add to Cart</span>
            </button>
        </div>
    )
}

const PrevArrow = ({receipeSlide}) => {
    return (
        <button 
            onClick={() => receipeSlide.current.slickPrev()} 
            className="hover:cursor-pointer absolute z-10 top-36 p-2 rounded-tr-lg rounded-br-lg w-10 h-10 bg-black opacity-25 hover:opacity-100 text-white">
                <FaAngleLeft/>
            </button>
    )
};

const NextArrow = ({receipeSlide}) => {
    return (
        <button 
            onClick={() => receipeSlide.current.slickNext()} 
            className="hover:cursor-pointer absolute z-10 right-0 top-36 p-2 rounded-bl-lg rounded-tl-lg w-10 h-10 bg-black hover:opacity-100 opacity-25 text-white">
                <FaAngleRight/>
            </button>
    )
};

export default TopProducts;