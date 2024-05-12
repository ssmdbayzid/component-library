import { createBrowserRouter } from "react-router-dom"
import  Home from "../Page/Home"
import AntDesign from "../Page/AntDesign/AntDesign";
import MainLayout from "../Layout/MainLayout";
import HeadlessUi from "../Page/HeadlessUI/HeadlessUi";
import PrimeReact from "../Page/PrimeReact/PrimeReact";
import Tremor from "../Page/Tremor/Tremor";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/ant-library",
                element: <AntDesign />
            },
            {
                path: "/headless-ui",
                element: <HeadlessUi />
            },
     
            {
                path: "/prime-react",
                element: <PrimeReact />
            },
            {
                path: "/tremor",
                element: <Tremor />
            },
        ],
    },
    
])

export default router;