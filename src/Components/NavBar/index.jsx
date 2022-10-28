import React from "react";
import CartWidget from "../Widget/indexW";

import "./styles.css";


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#heladeria">Heladeria</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#nosotros">Nosotros</a>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#helados">Helados</a></li>
              <li><a class="dropdown-item" href="#pattiserie">Pattiserie</a></li>
            </ul>
  </li> */}
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contacto">Contacto</a>
          </li>
          <CartWidget/>
        </ul>
      </div>
    </div>
  </nav>
  );
};
export default NavBar;
