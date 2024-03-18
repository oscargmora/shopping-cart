import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Catalogue from "./shop/catalogue/Catalogue";
import Cart from "./shop/cart/Cart";
import ErrorPage from "./error/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'catalogue',
            element: <Catalogue />,
        },
        {
            path: 'cart',
            element: <Cart />
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;