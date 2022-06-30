import classes from './NavButton.module.css';

const NavButton = (props) => {
    return(
        <li className={`${classes.navbutton} ${props.className}`}>{props.children}</li>
    )
}

export default NavButton;