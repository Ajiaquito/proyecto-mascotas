import React, { useEffect, useState } from 'react';
import './GaleriaMascotas.css';

const GaleriaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch('/mascotas.json')
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error('Error al cargar las mascotas:', error));
  }, []);

  return (
    <div className="galeria-container">
      <h1>Galería de Mascotas</h1>
      <div className="galeria-grid">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="mascota-card">
            <img src={mascota.foto} alt={mascota.nombre} className="mascota-foto" />
            <h2>{mascota.nombre}</h2>
            <p><strong>Especie:</strong> {mascota.especie}</p>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p>{mascota.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaMascotas;
