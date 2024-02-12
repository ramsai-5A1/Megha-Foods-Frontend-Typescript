import { RouterProvider } from "react-router-dom"
import "./App.css"
import appRouter from "./helper/routes"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="bg-gray-200 w-full h-screen">
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App