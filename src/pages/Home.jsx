import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FaUsers, FaChalkboardTeacher, FaHeartbeat } from 'react-icons/fa';
import saudeImage from '../assets/6632730.jpg'

const Home = () => {
  return (
    <div className="bg-light overflow-x-hidden" style={{ minHeight: '100vh' }}>
      <Header />

      {/* Bannière */}
      <header className="text-white text-center py-5" style={{ backgroundColor: '#00B5D8' }}>
        <h1 className="display-4">Bienvenue sur Saúde</h1>
        <p className="lead">Parce que chaque famille mérite du soutien</p>
      </header>

      {/* Présentation */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="text-primary">Une plateforme pensée pour les familles</h2>
            <p>
              Saúde est une plateforme inclusive et sécurisée dédiée aux familles et aidants de
              personnes atteintes d'autisme. Accédez à des ressources fiables, échangez avec une
              communauté bienveillante, et trouvez des professionnels spécialisés.
            </p>
            <Link to="/forum" className="btn btn-info mt-3">Rejoindre le forum</Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={saudeImage}
              alt="Illustration entraide"
              className="img-fluid rounded"
              style={{ maxHeight: '280px', maxWidth: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-white py-5 border-top">
        <div className="container text-center">
          <h3 className="mb-4 text-secondary">Découvrez nos fonctionnalités</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <FaUsers size={30} className="text-info mb-2" />
                  <h5 className="card-title text-info">Forum d'entraide</h5>
                  <p className="card-text">
                    Échangez avec d'autres familles et partagez vos expériences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <FaChalkboardTeacher size={30} className="text-info mb-2" />
                  <h5 className="card-title text-info">Ressources éducatives</h5>
                  <p className="card-text">
                    Articles, vidéos et fiches validés par des professionnels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <FaHeartbeat size={30} className="text-info mb-2" />
                  <h5 className="card-title text-info">Annuaire de professionnels</h5>
                  <p className="card-text">
                    Trouvez des spécialistes en autisme près de chez vous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-5 bg-info text-white text-center">
        <div className="container">
          <h3 className="mb-4">Commencez votre parcours avec Saúde</h3>
          <p>Créez un compte pour accéder à toutes les fonctionnalités de la plateforme.</p>
          <Link to="/register" className="btn btn-light mx-2">S’inscrire</Link>
          <Link to="/login" className="btn btn-outline-light mx-2">Se connecter</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-5" style={{ backgroundColor: '#00B5D8', color: 'white' }}>
        <p className="mb-0">© 2025 Saúde - Plateforme solidaire pour les aidants</p>
      </footer>
    </div>
  );
};

export default Home;
