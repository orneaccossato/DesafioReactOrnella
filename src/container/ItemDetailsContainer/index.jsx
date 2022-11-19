import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../Components/Item";
import { useParams } from "react-router-dom";
import getProducts from "../../Data/products";
import ItemDetail from "../../Components/ItemDetail";


const ItemDetailsContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    useEffect (() => {
      getProducts
      .then ((res)=>setDetalleProducto(res.find((Item)=> Item.id === id)))
      .catch ((error)=>console.log(error)) 
      .finally(()=> setLoading(false));

}, [id]);

return (
    <div>
        {loading 
        ? <h2> Cargando...</h2>
        : <ItemDetail detalleProducto={detalleProducto}/>}
    </div>
);
};
export default ItemDetailsContainer;
