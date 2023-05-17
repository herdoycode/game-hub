import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Error from "./pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:slug", element: <Game /> },
    ],
  },
]);

export default routes;
