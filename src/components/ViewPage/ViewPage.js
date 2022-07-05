import React from "react";
import SideBar from "../Layout/Sidebar";
import ViewMap from "../Layout/ViewMap";
import Map from "../Map/Map";
import testLocationData from "../store/testLocationData";
import classes from './ViewPage.module.css'

const ViewPage = (props) => {
    return <div className = {classes.viewPageWrapper}>
        <SideBar data = {testLocationData}></SideBar>
        <ViewMap data = {testLocationData} className = {classes.viewPage__viewMap}/>
    </div>
};

export default ViewPage;