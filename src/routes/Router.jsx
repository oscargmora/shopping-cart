import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import ErrorPage from "./error/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;