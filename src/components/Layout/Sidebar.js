import classes from '../ViewPage/ViewPage.module.css'
import SidebarSingleEntry from './SidebarSingleEntry';
import SidebarFilter from './SidebarFilter';
import { useEffect, useState } from 'react';


const SideBar = (props) => {
    const [filteredList, setFilteredList] = useState(props.data);

    const updateKeyphraseHandler = (keyphraseInput) => {
        if(keyphraseInput.length === 0){
            setFilteredList(props.data);
        } else {
            // console.log(filteredList)
            setFilteredList(props.data.filter((entry) => entry.name.includes(keyphraseInput)))
        }
    }



    return <div className={classes.sidebar}>
        <SidebarFilter onUpdate = {updateKeyphraseHandler}  />
        {/* {props.data.map((mapEntry) => {
            return <SidebarSingleEntry onUpdate = {updateKeyphraseHandler} key = {mapEntry.id} mapValue = {mapEntry} />
        })} */}
        {filteredList.map((mapEntry) => {
            return <SidebarSingleEntry key = {mapEntry.id} mapValue = {mapEntry} />
        })}

    </div>
};

export default SideBar;