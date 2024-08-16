import { Link } from "react-router-dom";
import styles from "../HomePage/headerContent.module.css";

const HeaderContent = (props) => {
  return (
    <>
      {props.position === "right" ? (
        <div>
          <div className={`${styles.main_gallery}`}>
            <div>
              <p>{props.text}</p>
              <Link to={props.link} className={`${styles.main_button}`}>
                {props.title}
              </Link>
            </div>
            <div>
              <img src={props.image}></img>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <div>
          <div className={`${styles.main_gallery}`}>
            <div>
              <img src={props.image}></img>
            </div>
            <div>
              <p>{props.text}</p>
              <Link to={props.link} className={`${styles.main_button}`}>
                {props.title}
              </Link>
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};
export default HeaderContent;
