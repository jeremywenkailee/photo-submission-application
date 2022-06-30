import classes from "./Header.module.css";
import NavButton from "./NavButton";
import HeaderTitle from "./HeaderTitle";
import Button from "../UI/Button";

const NavItems = [
    { navName: "VIEW", link: "https://www.google.com" },
    { navName: "ADD", link: "https://www.google.com" },
    { navName: "ABOUT", link: "https://www.google.com" },
];

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderTitle className={classes.headerTitle} />
      <nav>
        <ul className={classes.headerCta}>
          {NavItems.map((item) => {
            return (
              <NavButton className={classes.headerEntry} key={item.navName}>
                <a href={item.link}>{item.navName}</a>
              </NavButton>
            );
          })}
        </ul>
      </nav>
      <Button className = {classes.button}>LOGIN</Button>
    </div>
  );
};

export default Header;
