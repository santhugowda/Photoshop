import { Outlet } from "react-router-dom";
import Header from "./MainHeader";

function Mainpage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Mainpage;
