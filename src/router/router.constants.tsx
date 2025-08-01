import {Navigate} from "react-router-dom";
import type {RouteObject} from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "dashboard",
        lazy: async () => {
          const {Dashboard} = await import("@/pages/dashboard")
          return {Component: Dashboard}
        },
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/dashboard"/>
  }
]

export default routes;
