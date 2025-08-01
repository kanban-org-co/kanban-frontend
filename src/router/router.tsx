import routes from "./router.constants";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;
