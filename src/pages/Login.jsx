import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Connexion</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Adresse email</label>
                    <input type="email" className="form-control" placeholder="exemple@mail.com" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" placeholder="••••••••" required />
                  </div>
                  <button type="submit" className="btn btn-info w-100">Se connecter</button>
                </form>
                <p className="mt-3 text-center">
                  Pas encore de compte ? <Link to="/register">S’inscrire</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
