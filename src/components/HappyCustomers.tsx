import { HAPPY_CUSTOMERS_YOUTUBE_IDS, YOUTUBE_URL_PREFIX } from "../helper/constants";

const HappyCustomers = () => {
    return (
        <div className="w-full h-72 bg-gray-50 p-2 m-2">
            <div className="items-center justify-center flex p-2 flex-col">
                <span className="font-bold text-lg ">Happy Customers</span>
                <span className="border border-gray-300 w-1/5 m-2"></span>
            </div>
            <div className="flex space-x-3 p-3 justify-between">
                {HAPPY_CUSTOMERS_YOUTUBE_IDS.map((text, index) => <EmbeddSingleVideo key={index} text={text}/>)}
            </div>
        </div>
    )
}

const EmbeddSingleVideo = ({text}) => {
    return (
        <div className="w-1/3 h-16 p-4">
            <iframe src={YOUTUBE_URL_PREFIX + text} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen></iframe>
        </div>
    )
}

export default HappyCustomers;