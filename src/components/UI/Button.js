import classes from './Button.module.css';

const Button = (props) => {
    return <button className={`${props.className} ${classes.uiButton}`}>{props.children}</button>
};

export default Button;