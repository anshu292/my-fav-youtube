import React from "react";

import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body=()=>
{
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
            
            {/* <MainContainer/>//according to route we will change sidebar and  */}
        </div>
    )
}
export default Body;
