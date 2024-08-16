import { Link } from "react-router-dom";
import styles from "../HomePage/headerBottom.module.css";

const HeaderBottom = (props) => {
  console.log(props);
  return (
    <>
      <div className={`${styles.main_gallery}`}>
        <img src={props.image}></img>
        {/* <p></p> */}
        <Link to={props.link} className={`${styles.main_button}`}>
          {props.title}
        </Link>
      </div>
    </>
  );
};
export default HeaderBottom;
