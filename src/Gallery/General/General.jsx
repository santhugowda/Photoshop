import styles from "./genral.module.css";
function General(props) {
  console.log(props);
  return (
    <>
      <div className={`${styles.general}`}>
        <div className={`${styles.gallery_image}`}>
          <img src={props.image} style={{ width: "100%" }}></img>
        </div>

        <div className={`${styles.gallery_content}`}>
          <p>{props.text}</p>
          <p>
            <b>Photographed by:{props.photographer} </b>
          </p>
          <hr />
          <p>
            <b>Filmed by :{props.filmed}</b>
          </p>
          <hr />
          <p>
            <b>Edited by:{props.edited}</b>
          </p>
          <hr />
        </div>
      </div>
    </>
  );
}
export default General;
