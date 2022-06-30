import classes from "../ViewPage/ViewPage.module.css";
import testImage from "../../images/test.jpg";

const stringTruncate = (string) => {
  if (string.length <= 130) {
    return string;
  } else {
    return `${string.substring(0, 130)}...`;
  }
};

const SidebarSingleEntry = (props) => {
  const { id, name, submittedBy, description, lat, lon, type } = props.mapValue;

  const truncatedDescription = stringTruncate(description);

  return (
    <div className={classes.sidebarEntry}>
      {/* <div className={classes.sidebarName}>
            {name}
        </div>
        <div></div>
        <div>Submitted by: {submittedBy}</div> */}
      {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div> */}
      <div className={classes.sidebarThumbnail}>
        <img src={testImage} alt="testImage"></img>
      </div>

      <div className={classes.sidebarName}>{name}</div>
      <div className={classes.sidebarCreatedBy}>
        Submitted by: {submittedBy}
      </div>
      <div className={classes.sidebarDescription}>{truncatedDescription}</div>
    </div>
  );
};

export default SidebarSingleEntry;
