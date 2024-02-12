
const Testimonials = () => {
    return (
        <div className="bg-black p-2 mr-2">
            <div className="items-center flex justify-center flex-col">
                <span className="font-bold text-2xl text-white">Testimonials</span>
                <span className="border border-white w-56 m-4"></span>
            </div>
            <div className="flex flex-wrap   items-center justify-center">
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            </div>
           
        </div>
    )
}

const TestimonialCard = () => {

    const name = "Venkatesh";
    const address = "Seattle, Washington, USA";
    const review = "The website is well put together and easy to use! While the shipping prices are a bit high, they at least go down with increased quantities. This food made me nostalgic for home, and brought back wonderful memories. During the pandemic, this has been a welcome taste of home.The website is well put together and easy to use! While the shipping prices are a bit high, they at least go down with increased quantities. This food made me nostalgic for home, and brought back wonderful memories. During the pandemic, this has been a welcome taste of home."


    return (
        <div className="bg-white  text-black w-[20%] h-72 p-2 m-4 rounded-lg shadow-lg">
            <div className="flex flex-col">
                <span className="font-bold text-lg">{name}</span>
                <span className="font-semibold">{address}</span>
            </div>

            <div className="w-auto border border-gray-500 rounded-full m-2 mt-8 mb-5"></div>

            <div className="h-40 scroll-smooth m-1 overflow-auto">
                <p className="">{review}</p>
            </div>
        </div>
    )
}

export default Testimonials