import React from "react";
import SideBar from "../Layout/Sidebar";
import ViewMap from "../Layout/ViewMap";
import Map from "../Map/Map";
import classes from './ViewPage.module.css'

const ViewPage = (props) => {
    return <div className = {classes.viewPageWrapper}>
        <SideBar></SideBar>
        <ViewMap className = {classes.viewPage__viewMap}/>
    </div>
};

export default ViewPage;