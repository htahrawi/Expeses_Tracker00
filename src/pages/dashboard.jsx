import { Fragment } from "react";
import SideBar from "../components/dashboard/SideBar";
import HeaderContent from "../components/dashboard/HeaderContent";
import "../resources/css/all.min.css";
import "../resources/css/framework.css";
import { Outlet } from "react-router-dom/dist";

const Dashboard = function () {
    
    return <Fragment>
        <div className="page d-flex">
            <SideBar />
            <div className="content w-full">
                    <HeaderContent />
                    <Outlet />
            </div>
        </div>
    </Fragment>
}

export default Dashboard;