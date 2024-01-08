import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

// const styleCard ={
//   backgroundColor : "yellow"
// }; 
// we can give styling to any function by creating separate varialbel also..

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children:
    [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path:"/restaurants/:id",
        element:<ResMenu/>
      }
    ],
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
