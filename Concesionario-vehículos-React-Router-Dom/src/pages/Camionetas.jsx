import { Link } from "react-router-dom";

export const Camionetas = ({ tiposCamionetas}) => {
  return (
    <div className="container px-4 py-6 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold tracking-wide text-center uppercase text-orange-400">Camionetas</h1>
      <ul className="grid grid-cols-2 gap-4">
        {tiposCamionetas.map((tipoCamionetas) => (
          <li key={tipoCamionetas.id} className="flex justify-center">
            <Link to={`/camionetas/${tipoCamionetas.id}`}
            
            className="w-full px-4 py-2 font-semibold text-center uppercase transition ease-in-out delay-150 transform border border-gray-600 border-solid rounded-lg text-orange-400 btn hover:bg-orange-400 hover:text-slate-900 hover:font-semibold "

            >{tipoCamionetas.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};