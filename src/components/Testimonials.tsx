import { useEffect, useState } from "react";
import { BACKEND_TESTIMONIAL_API } from "../helper/constants";
import { IoStar } from "react-icons/io5";

interface TestimonialData {
    id: number,
    name: string,
    address: string,
    reviewDescription: string,
    starRating: number
}

type TestimonialDataArray = TestimonialData[];

const Testimonials = () => {

    const [testimonialsData, setTestimonialsData] = useState<TestimonialDataArray>([]);

    useEffect(() => {
        const fetchFromBackend = async () => {
            const response = await fetch(BACKEND_TESTIMONIAL_API);
            const data = await response.json();
            setTestimonialsData(data.data);
        };

        fetchFromBackend();
    }, []);

    if (testimonialsData.length == 0) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="bg-black p-2 mr-2">
            <div className="items-center flex justify-center flex-col">
                <span className="font-bold text-2xl text-white">Testimonials</span>
                <span className="border border-white w-56 m-4"></span>
            </div>
            <div className="flex flex-wrap   items-center justify-center">
                {testimonialsData.map((data) => <TestimonialCard key={data.id} {...data}/>)}
            </div>
           
        </div>
    )
}

const TestimonialCard = ({name, address, reviewDescription, starRating}: TestimonialData) => {

    const [stars, setStars] = useState<number[]>([]);
    useEffect(() => {
        let tempArr: number[] = [];
        for(let index: number = 0; index < starRating; index++) {
            tempArr.push(index);
        }
        setStars(tempArr);
    }, []);

    return (
        <div className="bg-white  text-black w-[20%] h-96 p-2 m-4 rounded-lg shadow-lg">
            <div className="flex flex-col">
                <span className="font-bold text-lg">{name}</span>
                <span className="font-semibold">{address}</span>
                <div className="flex">
                    {stars.map((star) => <IoStar key={star}/>)}
                </div>
            </div>

            <div className="w-auto border border-gray-500 rounded-full m-2 mt-8 mb-5"></div>

            <div className="h-60 scroll-smooth m-1 overflow-auto">
                <p className="">{reviewDescription}</p>
            </div>
        </div>
    )
}

export default Testimonials