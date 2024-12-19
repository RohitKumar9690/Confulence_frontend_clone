import React from "react";
import { Outlet } from "react-router-dom";  
import Navbar from './navbar'; 
import QuickStartButton from "./reuseable-components/quickStartButton";
import DocSlideBar from "./reuseable-components/document-sidebar";

const Layout2 = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <DocSlideBar />
                <div className="flex-1 ml-64">
                        <Outlet />
                    </div>
            </div>
            <QuickStartButton/>
        </div>
    );
};

export default Layout2;
