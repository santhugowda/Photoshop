import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Films from "./Films/Films";
import Gallery from "./Gallery/Gallery";
import Wedding from "./Wedding/Wedding";
import Experience from "./TheExperience/Experience";
import Blog from "./Blog/Blog";
import Portfolio from "./Portfolio/Portfolio";
import CoupleShoots from "./CoupleShoots/CoupleShoots";
import HomePageBody from "./HomePage/HomePageBody";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/", element: <HomePageBody /> },
      { path: "/films", element: <Films /> },
      { path: "/wedding", element: <Wedding /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/experience", element: <Experience /> },
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
