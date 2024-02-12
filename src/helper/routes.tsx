import { createBrowserRouter } from "react-router-dom";
import SubApp from "../components/SubApp";
import Testimonials from "../components/Testimonials";
import Suggest from "../components/Suggest";
import Home from "../components/Home"
import Aboutus from "../components/Aboutus";
import EventBulkOrders from "../components/EventBulkOrders";
import Gifting from "../components/Gifting";
import Contactus from "../components/Contactus";
import ProductCategory from "../components/ProductCategory";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <SubApp/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/testimonials",
                element: <Testimonials/>
            },
            {
                path: "/suggest",
                element: <Suggest/>
            },
            {
                path: "/about-us",
                element: <Aboutus/>
            },
            {
                path: "/event-bulk-orders",
                element: <EventBulkOrders/>
            },
            {
                path: "/gifting",
                element: <Gifting/>
            },
            {
                path: "/contact-us",
                element: <Contactus/>
            },
            {
                path: "/product-category",
                element: <ProductCategory/>,
                children: []
            }
        ]
    }
]);

export default appRouter;