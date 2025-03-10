// Navbar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand me-3" href="#">
          <i className="bi bi-house"></i>
        </a>
        <div className="navbar-nav me-auto">
          {/* Botón para desplegar el dropdown */}
          <button
            className="btn btn-danger"
            type="button"
            id="navbarDropdownRecursos"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recursos
          </button>
          {/* Dropdown de Recursos */}
          <ul
            className="dropdown-menu dropdown-menu-dark full-width-dropdown"
            aria-labelledby="navbarDropdownRecursos"
          >
            <div className="d-flex flex-row justify-content-around w-100">
              <li>
                <a className="dropdown-item" href="#">
                  Documentación
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tutoriales
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ejercicios
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="d-flex align-items-center ms-auto">
          <a
            href="#"
            className="nav-link mx-2 text-white"
            aria-label="Descargar"
          >
            <i className="bi bi-download"></i>
          </a>
          <a
            href="#"
            className="nav-link mx-2 text-white"
            aria-label="Perfil"
          >
            <i className="bi bi-person-circle"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
