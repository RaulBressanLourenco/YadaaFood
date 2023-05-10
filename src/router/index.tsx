import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cart } from "../Pages/Cart";

export const router = createBrowserRouter ([
    {
        path: '/', 
        element: <Home />
    },
    {
        path: '/cart',
        element: <Cart />
    }
])