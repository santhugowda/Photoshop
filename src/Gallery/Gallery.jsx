import styles from "./Gallery.module.css";
import ImageData from "./images/image";
import { Link } from "react-router-dom";

function Gallery() {
  console.log(ImageData[0].name);
  return (
    <div class={styles.gridContainer}>
      {ImageData.map((imageData) => {
        return (
          <div class={styles.gridItem}>
            <Link to={`/gallery/${imageData.name}`}>
              <img src={imageData.imagePath} width={420} height={350} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Gallery;
