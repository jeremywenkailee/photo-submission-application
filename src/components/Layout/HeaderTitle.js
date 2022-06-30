import classes from './HeaderTitle.module.css';
import logo from '../../images/wl.png';

const HeaderTitle = (props) => {
    return <div className = {`${classes.combinedLogoAndTitle} ${props.className}`}>
        <img src = {logo} alt = "SOV Logo"></img>
        <h1>PHOTO LOCATOR</h1>
    </div>
}

export default HeaderTitle;