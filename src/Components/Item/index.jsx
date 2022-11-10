import React from "react";

const Item= ({ producto }) => {
    const {id, categoryId, sabor, veggie, precio, image} = producto
    return(
     <div>
        <img src={producto.Image} alt="helado"/>       
        <p key={producto.id}>{producto.categoryId},{producto.sabor}{producto.veggie}</p>
     </div>
    )
}
export default Item