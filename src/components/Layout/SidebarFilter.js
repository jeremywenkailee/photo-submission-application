import { useState } from "react";


const SidebarFilter = (props) => {
    const nameSearchChangeHandler = (event) => {
        props.onUpdate(event.target.value);
    };

    return <div>
        <input onChange = {nameSearchChangeHandler} id = "nameSearch" type = "text" />
    </div>
};

export default SidebarFilter;