import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-left">
          <a href="/" className="footer-logo">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span>© 2025 Company, Inc</span>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/Team4-resources-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
