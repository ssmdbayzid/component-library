import { createBrowserRouter } from "react-router-dom"
import  Home from "../Page/Home"
import AntDesign from "../Page/AntDesign/AntDesign";
import MainLayout from "../Layout/MainLayout";
import HeadlessUi from "../Page/HeadlessUI/HeadlessUi";



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
        ],
    },
    
])

export default router;