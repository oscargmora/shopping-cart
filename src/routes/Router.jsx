import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./home/Home";
import Catalogue from "./shop/catalogue/Catalogue";
import Cart from "./shop/cart/Cart";
import ErrorPage from "./error/ErrorPage";

const Router = () => {
    const [basket, setBasket] = useState({});

    const addToBasket = ( item, count, title, image, price ) => {
        const newPrice = price * count;
        if (item in basket) {
            if (count === 0) {
                console.log(count)
                delete basket[item];
            } else {
                basket[item][0] = count;
                basket[item][3] = price * count;
                console.log(count)
                return basket;
            }
        } else {
            if (count !== 0) {
                setBasket(basket => {
                    basket = {...basket, [item]: [count, title, image, newPrice]};
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