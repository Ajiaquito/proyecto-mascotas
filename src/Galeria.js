import React from 'react';
import { useNavigate } from 'react-router-dom';
import mascotas from './mascotas.json';

const Galeria = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {mascotas.map(mascota => (
        <div key={mascota.id} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => navigate(`/mascota/${mascota.id}`)}>
          <img
            src={mascota.foto}
            alt={mascota.nombre}
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
          <p>{mascota.nombre}</p>
        </div>
      ))}
    </div>
  );
};

export default Galeria;