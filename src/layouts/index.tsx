import {
  createHashRouter as createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";
import { loadOrder } from "../order";
import App from "../App";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return <div>error page </div>;
};
const Layout = () => {
  const { res } = useLoaderData() as any;
  console.log(res.then((e: any) => console.log(e)));
  return (
    <div>
      <h1>默认布局--vercel</h1>
      {/* <a href="/">首页</a>| <a href="hello">hello页</a> |{" "}
      <a href="order">订单页</a> */}
      <Link to="/">首页</Link>| <Link to="hello">hello页</Link> |{" "}
      <Link to="order">订单页</Link>
      <Outlet></Outlet>
    </div>
  );
};

const Hello = () => {
  return <div>Hello</div>;
};
const Order = () => {
  return <div>Order </div>;
};

let hashRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: loadOrder,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
    ],
  },
  {
    path: "order",
    Component: Order,
  },
]);
function index() {
  return (
    <div>
      <RouterProvider router={hashRoute}></RouterProvider>
    </div>
  );
}

export default index;
