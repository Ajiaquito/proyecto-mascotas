import { useParams } from 'react-router-dom';
import mascotas from './mascotas.json'; // o la ruta correcta

const DetalleMascota = () => {
  const { id } = useParams();
  const mascota = mascotas.find(m => m.id === parseInt(id));

  if (!mascota) return <p>¡Mascota no encontrada!</p>;

  return (
    <div>
      <h2>{mascota.nombre}</h2>
      <img src={mascota.foto} alt={mascota.nombre} style={{ width: '300px' }} />
      <p><strong>Especie:</strong> {mascota.especie}</p>
      <p><strong>Raza:</strong> {mascota.raza}</p>
      <p><strong>Descripción:</strong> {mascota.descripcion}</p>
    </div>
  );
};

export default DetalleMascota;