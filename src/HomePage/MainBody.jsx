import styles from "./mainbody.module.css";
import React from "react";
import HeaderContent from "./HeaderContent";
import HeaderBottom from "./HeaderBottom";
import { data, dataBottom } from "./MainBodydata";
function Body() {
  return (
    <>
      <div className={`${styles.header_body}`}>
        <div className={`${styles.header_content}`}>
          <h1>Turn your wedding moments into cherished keepsake</h1>
          <p>
            Your special day deserve nothing but the best.Invest in our wedding
            <br />
            photography and films services for a lifetime of beautiful memories
          </p>
        </div>
        <button
          className={`${styles.main_button}`}
          style={{ margin: "100px auto", height: "80px", width: "400px" }}
        >
          Schedule a Consultation
        </button>
      </div>

      {data.map((data) => {
        return (
          <HeaderContent
            position={data.position}
            title={data.title}
            image={data.image}
            text={data.text}
            link={data.link}
          />
        );
      })}

      <div className={`${styles.header_bottom}`}>
        {dataBottom.map((dataBottom) => {
          return (
            <HeaderBottom
              title={dataBottom.title}
              image={dataBottom.image}
              link={dataBottom.link}
            />
          );
        })}
      </div>
    </>
  );
}
export default Body;
