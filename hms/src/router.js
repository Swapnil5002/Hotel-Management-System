import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.js";
import Spinner from "react-bootstrap/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // children: [
    //   {
    //     path: "dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    // ],
  },
]);

function RouterComponent() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <div>
          <Spinner animation="grow" variant="danger" />
        </div>
      }
    />
  );
}

export default RouterComponent;
