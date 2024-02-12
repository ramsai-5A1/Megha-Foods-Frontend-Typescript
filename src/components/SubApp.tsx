import { Outlet } from "react-router-dom"
import Header from "./Header"

const SubApp = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default SubApp