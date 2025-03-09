import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Price from "./pages/Price";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Currencies from "./pages/Currencies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "currencies", element: <Currencies /> },
      { path: "price/:symbol", element: <Price /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
