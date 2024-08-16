import General from "../General/General";
import ImageData from "../images/image";
import { useParams } from "react-router-dom";

const Name = (props) => {
  const params = useParams();
  const value = params.name;
  const index = ImageData.findIndex((item) => item.name === value);
  console.log(value, index);
  return (
    <>
      <General
        image={ImageData[index].imagePath}
        text={ImageData[index].text}
        photographer={ImageData[index].photographer}
        filmed={ImageData[index].filmed}
        edited={ImageData[index].edited}
      />
    </>
  );
};
export default Name;
