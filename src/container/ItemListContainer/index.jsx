import React, { useEffect, useState } from "react";
import "./styles.css";
import ItemList from "../../Components/ItemList";
import { data } from "../../Data/products";


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

useEffect ( () => {
    data
    .then((res)=> setListaProductos(res.filter(item => item.categoryId === "barrita helada") ))
    .catch((error)=> console.log (error))
    .finally(()=> setLoading(false));
}, []);
return (
    <div>
      <h2>{greeting}</h2>  
    </div>
  );
};

export default ItemListContainer;

