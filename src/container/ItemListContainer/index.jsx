import React, { useEffect, useState} from "react";
import "./styles.css";
import ItemList from "../../Components/ItemList";
import getProducts from "../../Data/products";
import { useParams } from "react-router-dom";
/*export default function ItemListContainer ({greeting}){
    return(
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    )
}*/

const ItemListContainer = ({greeting}) => {
const [listaProductos, setListaProductos] = useState([]);
const [loading, setLoading] = useState(true);
const params = useParams ()
console.log (params)

const categoryId = useParams ()
console.log (categoryId)

useEffect ( () => {
    getProducts
    .then((res)=> setListaProductos (res.find((Item)=> Item.categoryId === categoryId)))
    .catch((error)=> console.log (error))
    .finally(()=> setLoading(false));

}, []);
console.log (loading);
return (
    <div>
    {loading 
        ? <h2>Cargando... </h2>
        : <ItemList listaProductos={listaProductos} />}
</div>,
    <div>
      <h2>{greeting}</h2>  
    </div>
  );
};

export default ItemListContainer;

