import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand me-3">
          <i className="bi bi-house"></i>
        </Link>
        <div className="navbar-nav me-auto">
          <Link
            to="/resources"
            className="btn btn-danger"
            type="button"
            id="navbarDropdownRecursos"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recursos
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark full-width-dropdown">
            <div className="d-flex flex-row justify-content-around w-100">
              <li>
                <Link to="/resources/documentation" className="dropdown-item">
                  Documentación
                </Link>
              </li>
              <li>
                <Link to="/resources/tutorials" className="dropdown-item">
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link to="/resources/exercises" className="dropdown-item">
                  Ejercicios
                </Link>
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
          <a href="#" className="nav-link mx-2 text-white" aria-label="Perfil">
            <i className="bi bi-person-circle"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
