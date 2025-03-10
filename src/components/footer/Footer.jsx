import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#A20025', color: 'white' }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1" style={{ color: 'white' }}>
            <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
          </a>
          <span className="mb-3 mb-md-0" style={{ color: 'white' }}>© 2025 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-decoration-none" href="https://github.com/Team4-resources-project" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;