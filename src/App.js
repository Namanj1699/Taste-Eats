import React , {lazy, Suspense} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "../src/utils/Redux/appStore";
import Search from "./components/Search";

// const Body =  lazy(()=> import ("./components/Body"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
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
        path:"/restaurants/:id",
        element:<ResMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/search",
        element:<Search/>
      }
    ],
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
