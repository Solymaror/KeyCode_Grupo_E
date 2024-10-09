/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Bicicletas = ({ tiposBicicletas }) => {
  return (
    <div className="container px-4 py-6 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold tracking-wide text-center uppercase text-lime-500">
        Bicicletas
      </h1>
      <ul className="grid grid-cols-2 gap-4">
        {tiposBicicletas.map((tipoBicicleta) => (
          <li key={tipoBicicleta.id} className="flex justify-center">
            <Link
              to={`/bicicletas/${tipoBicicleta.id}`}
              className="w-full px-4 py-2 font-semibold text-center uppercase transition ease-in-out delay-150 transform border border-gray-600 border-solid rounded-lg text-lime-500 btn hover:bg-lime-500 hover:text-slate-900 hover:font-semibold "
            >
              {tipoBicicleta.nombre}{" "}
              <img
                src={tipoBicicleta.img}
                alt={tipoBicicleta.nombre}
                className="object-cover m-auto my-5 border-solid rounded-lg w-60 h-60"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
