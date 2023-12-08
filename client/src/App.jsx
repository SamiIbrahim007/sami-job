import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Sleep,
  Register,
  Login,
  Dashb,
  Problem,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Add,
  EditJob,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

import { loader as dashboardLoader } from "./pages/Dashb";

import { action as addJobAction } from "./pages/AddJob";

import { loader as allJobsLoader } from "./pages/AllJobs";

import { loader as editJobLoader } from "./pages/EditJob";
import { action as editJobAction } from "./pages/EditJob";

import { action as deleteJobAction } from "./pages/DeleteJob";

import { action as profileAction } from "./pages/Profile";

import { loader as adminLoader } from "./pages/Add";

import { loader as statsLoader } from "./pages/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Problem />,
    children: [
      {
        index: true,
        element: <Sleep />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <Dashb />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          { path: "stats", 
            element: <Stats />,
            loader: statsLoader,
         },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },

          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },

          {
            path: "admin",
            element: <Add />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },

          { path: "delete-job/:id", action: deleteJobAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
