import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./components/Feed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Body },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "feed",
        Component: Feed,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
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
