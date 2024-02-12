import { ABOUTPART_IMAGES, ABOUTPART_TEXTS, COMPANY_LOGO_2, EMPOWERMENT_IMAGE, FARMERS_FRIEND_IMAGE, HAPPY_CUSTOMERS_IMAGE, QUALITY_SERVICE_IMAGE } from "../helper/constants"
import HappyCustomers from "./HappyCustomers"
import Testimonials from "./Testimonials"
import TopProducts from "./TopProducts"

const Body = () => {
    return (
        <div>
            <AboutPart/>
            <TopProducts/>
            <HappyCustomers/>
            <Testimonials/>
            <AboutPart/>
        </div>
    )
}

const AboutPart = () => {
    return (
        <div className="bg-customBlue w-full h-full">
            <div className="flex justify-center p-2 items-center flex-col">
                <img className="w-96 h-96" src={COMPANY_LOGO_2}/>
                <span className="font-bold text-lg text-white">The Store for home made food products</span>
            </div>

            <div className="flex justify-between p-4 px-10 mt-20">
                {ABOUTPART_IMAGES.map((src, index) => <CircleCard key={index} src={src} text={ABOUTPART_TEXTS[index]}/>)}  
            </div>

        </div>
    )
}

const CircleCard = ({src, text}: {src: string, text: string}) => {
    return (
        <div>
            <div className="max-w-72 flex flex-col justify-center items-center space-y-2 mb-10">
                    <img alt="image-1" className="w-56 h-44" src={src}/>
                    <div className="flex flex-col justify-center">
                        <span className="text-sm text-center text-white">{text}</span>
                    </div>
                </div>
        </div>
    )
}

export default Body