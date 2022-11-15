import React from "react";
import CartWidget from "../CartWidget/indexW";
import { Link } from "react-router-dom";
import "./styles.css";


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand">Heladeria</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to= "/" class="nav-link active" aria-current="page">Home</Link>
          </li>
          <li class="nav-item">
          <Link to= "/categoryId/paletas heladas" class="nav-link active" aria-current="page">Helados</Link>
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
          < Link to="/categoryId/barritas heladas" class="nav-link active" aria-current="page">Barritas</Link>
          </li>
          <CartWidget/>
        </ul>
      </div>
    </div>
  </nav>
  );
};
export default NavBar;
