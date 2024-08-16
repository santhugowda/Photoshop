import styles from "./header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { socialMedia, header } from "./MainBodydata";
function Header() {
  return (
    <>
      <div className={`${styles.header}`}>
        <h1>Parth Studio</h1>
        <div className={`${styles.header_main}`}>
          <div className={`${styles.header_media}`}>
            {socialMedia.map((socialMedia) => {
              return (
                <a href={socialMedia.link} target="_blank">
                  {socialMedia.title}
                </a>
              );
            })}
          </div>
          <div className={`${styles.header_navigation}`}>
            {header.map((header) => {
              return (
                <Link
                  to={header.link}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {header.title}
                </Link>
              );
            })}
          </div>

          <button className={`${styles.header_button}`}>ENQUIRE WITH US</button>
        </div>
      </div>
    </>
  );
}
export default Header;
