import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHome, FaBook, FaUserMd, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#00B5D8' }}>
      <div className="container">
        {/* Logo et nom */}
        <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
          <FaHandsHelping className="me-2" />
          Saúde
        </Link>

        {/* Bouton hamburger mobile */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens du menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <FaHome className="me-1" />
                Accueil
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/forum">
                    <i className="bi bi-chat-dots me-1"></i>
                        Forum
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ressources">
                <FaBook className="me-1" />
                Ressources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/annuaire">
                <FaUserMd className="me-1" />
                Annuaire
              </Link>
            </li>

            {/* Liens à droite : Login / Register */}
            <li className="nav-item ms-3">
              <Link className="btn btn-light btn-sm" to="/login">
                <FaSignInAlt className="me-1" />
                Connexion
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="btn btn-outline-light btn-sm" to="/register">
                <FaUserPlus className="me-1" />
                S’inscrire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
