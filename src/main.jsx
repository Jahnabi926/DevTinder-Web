import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./components/Feed.jsx";
import Connections from "./components/Connections.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Body },
      {
        path: "feed",
        Component: Feed,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "connections",
        Component: Connections,
      },
      {
        path: "requests",
        Component: Profile,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);
