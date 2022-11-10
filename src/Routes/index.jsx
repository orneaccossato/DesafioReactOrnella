import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Components/Root"
/*import ItemDetailsContainer from "../container/ItemDetailsContainer";*/
import ItemListContainer from "../container/ItemListContainer";

const router = createBrowserRouter ([
    {
        path: "/",
        Element: <Root/>,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                Element: <ItemListContainer/>
            },{
                path: "/category/:categoryId",
                Element: <ItemListContainer/>
            },/*{
                path: "/detail/:id",
                Element: <ItemDetailsContainer/>
            }*/
        ]
    }
]);
const Router = () => {
    return <RouterProvider router={router} />;

}
export default Router

