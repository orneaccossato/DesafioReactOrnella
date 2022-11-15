import React, { useEffect, useState } from "react";
import "./styles.css";
import ItemList from "../../Components/ItemList";
import getProducts, { data } from "../../Data/products";

/*export default function ItemListContainer ({greeting}){
    return(
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    )
}*/

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts
            .then((res) =>
                setListaProductos(
                    res.filter((item) => item.categoryId === "barrita helada")
                )
            )
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    console.log(loading);
    return (
        <div>
            {loading 
                ? <h2>Cargando... </h2>
                : <ItemList listaProductos={listaProductos} />}
        </div>
    );
};

export default ItemListContainer;
