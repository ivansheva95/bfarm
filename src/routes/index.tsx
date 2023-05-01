import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { publicPaths } from "./paths";
import { RootLayout } from "layouts";

export const routing = createBrowserRouter([
  {
    path: publicPaths.HOME,
    element: <RootLayout />,
    children: [
      ...publicRoutes
    ]
  }
])