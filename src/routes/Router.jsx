import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./home/Home";
import Catalogue from "./shop/catalogue/Catalogue";
import Cart from "./shop/cart/Cart";
import ErrorPage from "./error/ErrorPage";

const Router = () => {
    const [basket, setBasket] = useState({});

    const addToBasket = ( item, count, title, image, price ) => {
        if (item in basket) {
            if (count === 0) {
                delete basket[item];
            } else {
                basket[item][0] = count;
                return basket;
            }
        } else {
            if (count !== 0) {
                setBasket(basket => {
                    basket = {...basket, [item]: [count, title, image, price]};
                    return basket;
                });
            }
        }
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'catalogue',
            element: <Catalogue addToBasket={addToBasket} basket={basket} />,
        },
        {
            path: 'cart',
            element: <Cart addToBasket={addToBasket} basket={basket} />
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;