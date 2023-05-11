import React from "react";
import {
  Navigate,
  Outlet,
  RouteObject
} from "react-router-dom";
import { Loadable } from "./Loadable";
import { publicPaths } from "./paths";

const HomePage = Loadable(React.lazy(() => import('../pages/HomePage')))
const AboutPage = Loadable(React.lazy(() => import('../pages/AboutPage')))
const ContactPage = Loadable(React.lazy(() => import('../pages/ContactPage')))
const PrivacyPage = Loadable(React.lazy(() => import('../pages/PrivacyPage')))

export const publicRoutes: RouteObject[] = [
  {
    path: publicPaths.HOME,
    element: <Outlet />,
    children: [
      { index: true, element: <HomePage /> },
      { path: publicPaths.ABOUT, element: <AboutPage /> },
      { path: publicPaths.CONTACT, element: <ContactPage /> },
      { path: publicPaths.PRIVACY, element: <PrivacyPage /> }
    ]
  },
  { path: '*', element: <Navigate to={publicPaths.HOME} /> }
]
