import React, { useState } from 'react';
import Header from '../components/Header';

const Ressources = () => {
  const [filter, setFilter] = useState('');
  const ressources = [
    { id: 1, title: 'Guide TSA pour parents', type: 'PDF' },
    { id: 2, title: 'Vidéo : structurer la journée', type: 'Vidéo' },
    { id: 3, title: 'Article sur les routines', type: 'Article' },
    { id: 4, title: 'Affiche visuelle : émotions', type: 'PDF' }
  ];

  const filtered = ressources.filter((r) =>
    r.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Ressources éducatives</h2>

        {/* Barre de recherche */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher une ressource..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Liste des ressources */}
        <div className="row">
          {filtered.map((res) => (
            <div key={res.id} className="col-md-6 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{res.title}</h5>
                  <p className="card-text"><strong>Type :</strong> {res.type}</p>
                  <button className="btn btn-outline-info">Voir plus</button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p>Aucune ressource trouvée.</p>}
        </div>
      </div>
    </div>
  );
};

export default Ressources;
