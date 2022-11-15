import React from "react";

const Item= ({ producto }) => {
    return(
     <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
        <img src={producto.Image} alt="helado"/>       
        <p key={producto.id}>{producto.categoryId},{producto.sabor}</p>
        <p key={producto.id}>Apto veggie: {producto.veggie}</p>
     </div>
    )
}
export default Item