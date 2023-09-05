import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './Pages/Login/Index'
import Todotask from "./Pages/Todotask/Index";
import Location from "./Pages/Location/Index";




const router = createBrowserRouter([

  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/todo",
    element: <Todotask/>
  },
  {
    path: "/location",
    element: <Location/>
  },
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
