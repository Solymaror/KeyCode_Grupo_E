
import { useParams,useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

  export const CarrosDetalle = ({tiposCarros}) => {

    const navegador = useNavigate();

    const {id} = useParams();

    const infoCarro = tiposCarros.find(
      
      (tipoCarros) => tipoCarros.id.toString() === id
    );
    const funcionNavegar = () => {
      navegador(-1);
    }; 

    return (
      <section className="flex items-center justify-center py-20 border border-gray-600 bg-slate-800 rounded-xl">
          <div>
            <h1 className="mb-4 text-2xl font-bold text-center uppercase text-purple-600">
              Detalle del Carro
            </h1>
            <h2 className="mb-2 text-xl font-semibold">Nombre Camioneta: {infoCarro.nombre}</h2>
            <p className="mb-4 italic text-gray-700">Descripción:{infoCarro.descripcion} </p>
            <h3 className="mb-4 text-lg font-medium">
              Precio: $ {infoCarro.precio}
            </h3>
            <button 
            onClick={funcionNavegar}
            className="flex items-center justify-center w-full px-4 py-2 font-semibold uppercase transition duration-300 ease-in-out rounded-lg text-slate-800 text-late-900 bg-purple-600 hover:bg-purple-400"
            >
              <FaArrowLeft className="mr-2" /> {/* Icono con margen a la derecha */}
              Regresar
            </button>
          </div>     
      </section>
    )
  }


