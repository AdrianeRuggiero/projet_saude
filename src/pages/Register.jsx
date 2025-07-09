import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Créer un compte</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nom complet</label>
                    <input type="text" className="form-control" placeholder="Jean Dupont" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adresse email</label>
                    <input type="email" className="form-control" placeholder="exemple@mail.com" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" placeholder="••••••••" required />
                  </div>
                  <button type="submit" className="btn btn-info w-100">S’inscrire</button>
                </form>
                <p className="mt-3 text-center">
                  Déjà inscrit ? <Link to="/login">Se connecter</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
