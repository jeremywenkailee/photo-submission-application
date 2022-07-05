import Map from "../Map/Map";
import classes from '../ViewPage/ViewPage.module.css'

const ViewMap = (props) => {
    return <div className = {classes.map__border}>
        <Map data = {props.data}> </Map>
    </div>
}

export default ViewMap;