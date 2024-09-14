import { Link } from "react-router-dom";

export const Motos = ({ tiposMotos }) => {
  return (
    <div>
      <h1>Motocicletas</h1>
      <ul>
        {tiposMotos.map((tipoMoto) => (
          <li key={tipoMoto.id}>
            <Link to={`/bicicletas/${tipoMoto.id}`}>{tipoMoto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
