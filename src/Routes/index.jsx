import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Components/Root"
import ItemListContainer from "../container/ItemListContainer";
import ItemDetailsContainer from "../container/ItemDetailsContainer";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root/>,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "",
                element: <ItemListContainer/>
            },{
                path: "/category/:categoryId",
                element: <ItemListContainer/>
            },{
                path: "/detail/:id",
                Element: <ItemDetailsContainer/>
            }
        ]
    }
]);
const Router = () => {
    return <RouterProvider router={router} />;

}
export default Router

