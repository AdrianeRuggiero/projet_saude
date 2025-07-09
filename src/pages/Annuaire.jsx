import React, { useState } from 'react';
import Header from '../components/Header';

const Annuaire = () => {
  const [search, setSearch] = useState('');
  const professionnels = [
    { id: 1, nom: 'Dr Claire Dubois', spécialité: 'Psychologue', ville: 'Paris' },
    { id: 2, nom: 'Sophie Martin', spécialité: 'Orthophoniste', ville: 'Lyon' },
    { id: 3, nom: 'Julie Bernard', spécialité: 'Éducatrice spécialisée', ville: 'Toulouse' }
  ];

  const filtrés = professionnels.filter((p) =>
    `${p.nom} ${p.spécialité} ${p.ville}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Annuaire des professionnels</h2>

        {/* Barre de recherche */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher par nom, spécialité ou ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Liste des professionnels */}
        <div className="row">
          {filtrés.map((pro) => (
            <div key={pro.id} className="col-md-6 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{pro.nom}</h5>
                  <p className="card-text">
                    <strong>Spécialité :</strong> {pro.spécialité}<br />
                    <strong>Ville :</strong> {pro.ville}
                  </p>
                  <button className="btn btn-info">Contacter</button>
                </div>
              </div>
            </div>
          ))}
          {filtrés.length === 0 && <p>Aucun professionnel trouvé.</p>}
        </div>
      </div>
    </div>
  );
};

export default Annuaire;
