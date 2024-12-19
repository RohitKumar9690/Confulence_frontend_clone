import React from "react";
import { Outlet } from "react-router-dom";  
import Navbar from './navbar'; 
import Sidebar from './sidebar'; 
import QuickStartButton from "./reuseable-components/quickStartButton";

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Sidebar />
                <div className=" flex-1 ml-60">
                        <Outlet />
                    </div>
            </div>
            <QuickStartButton/>
        </div>
    );
};

export default Layout;
