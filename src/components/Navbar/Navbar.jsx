import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import resourcesList from '../../services/resourcesconfig';
import "./Navbar.css";
import UploadModal from "../modals/UploadModal";

const Navbar = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
  
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Usuario o contraseña incorrectos");
      }
  
      const successMessage = await response.text();
      setSuccessMessage(successMessage || "Inicio de sesión exitoso. Redirigiendo...");
  
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
  
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Error en el registro");
      }
  
      const successMessage = await response.text();
      setSuccessMessage(successMessage || "¡Registro exitoso! Redirigiendo...");
  
      setTimeout(() => {
        setIsRegisterMode(false);
        setSuccessMessage("");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand me-3">
          <i className="bi bi-house"></i>
        </Link>
        <div className="navbar-nav me-auto">
        <button
              className="btn btn-danger"
              type="button"
              id="navbarDropdownRecursos"
              data-bs-toggle="dropdown"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
            Recursos
          </button>
          <ul className="dropdown-menu dropdown-menu-dark full-width-dropdown">
            <div className="d-flex flex-row justify-content-around w-100">
              {resourcesList.map((resource) => (
                <li key={resource.id}>
                  <Link
                    to={`/resources/${resource.id}`}
                    className="dropdown-item"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {resource.category}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="ms-auto d-flex align-items-center">
          <a
            href="#"
            className="nav-link mx-2 text-white"
            aria-label="Subir"
            onClick={handleShow}
          >
            <i className="bi bi-upload"></i>
          </a>

          <a
            href="#"
            className="nav-link mx-2 text-white"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            aria-label="Perfil"
          >
            <i className="bi bi-person-circle"></i>
          </a>
        </div>
      </div>

      <div
        className="modal fade loginModal"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="loginModalLabel">
                {isRegisterMode ? "Registro" : "Inicio de Sesión"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={isRegisterMode ? handleRegister : handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="usernameInput" className="form-label">
                      Nombre de Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameInput"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Usuario"
                      required
                    />
                  </div>

                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                  />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <button
                type="submit"
                className={`btn btn-${isRegisterMode ? "success" : "primary"}`}
                disabled={loading}
                onClick={isRegisterMode ? handleRegister : handleLogin}
              >
                {loading ? "Cargando..." : isRegisterMode ? "Registrarse" : "Iniciar Sesión"}
              </button>

              <button
                type="button"
                className="btn btn-link"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
              >
                {isRegisterMode ? "¿Ya tienes cuenta? Inicia sesión" : "¿Nuevo? Regístrate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <UploadModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default Navbar;
