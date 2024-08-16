import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./HomePage/MainPage";
import Body from "./HomePage/MainBody";
import Films from "./Films/Films";
import Wedding from "./Wedding/Wedding";
import Gallery from "./Gallery/Gallery";
import Blog from "./Blog/Blog";
import CoupleShoots from "./CoupleShoots/CoupleShoots";
import Portfolio from "./Portfolio/Portfolio";
import TheExperience from "./TheExperience/TheExperience";
import Name from "./Gallery/Name/Name";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/films", element: <Films /> },
      { path: "/wedding", element: <Wedding /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/gallery/:name", element: <Name /> },
      { path: "/experience", element: <TheExperience /> },
      { path: "/blog", element: <Blog /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/coupleShoots", element: <CoupleShoots /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
