import Map from "../Map/Map";
import classes from '../ViewPage/ViewPage.module.css'

const ViewMap = () => {
    return <div className = {classes.map__border}>
        <Map> </Map>
    </div>
}

export default ViewMap;