import { Link } from "react-router-dom";

export const Camionetas = ({ tiposCamionetas}) => {
  return (
    <div>
      <h1>camionetas</h1>
      <ul>
        {tiposCamionetas.map((tipoCamionetas) => (
          <li key={tipoCamionetas.id}>
            <Link to={`/camionetas/${tipoCamionetas.id}`}>{tipoCamionetas.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};