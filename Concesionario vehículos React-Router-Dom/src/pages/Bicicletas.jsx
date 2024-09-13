import { Link } from "react-router-dom";

export const Bicicletas = ({ tiposBicicletas }) => {
  return (
    <div>
      <h1>Bicicletas</h1>
      <ul>
        {tiposBicicletas.map((tipoBicicleta) => (
          <li key={tipoBicicleta.id}>
            <Link to={`/bicicletas/${tipoBicicleta.id}`}>{tipoBicicleta.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
