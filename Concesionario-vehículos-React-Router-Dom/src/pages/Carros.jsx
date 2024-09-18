import { Link } from "react-router-dom"

  export const Carros = ({tiposCarros}) => {
    return (
      <div className="container px-6 py-6 mx-auto">
        <h1 className="mb-6 text-4xl font-semibold tracking-wide text-center uppercase text-purple-600">Carros</h1>
        <ul className="grid grid-cols-2 gap-4">
          {tiposCarros.map((tipoCarros) => (
            <li key={tipoCarros.id} className="flex justify-center">
              <Link 
                to={`/carros/${tipoCarros.id}`}
                className="w-full px-4 py-2 font-semibold text-center uppercase transition ease-in-out delay-150 transform border border-gray-500 border-solid rounded-lg text-cyan-400 btn hover:bg-cyan-500 hover:text-slate-900 hover:font-semibold"
              >
                  {tipoCarros.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }