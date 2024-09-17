/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const CamionetasDetalle = ({ tiposCamionetas }) => {
  /** Uso lo que importe para navegar a algun sitio */
  const navegador = useNavigate();
  /** Busca en la URL el parametro que asigne en la ruta Ej. /productos/:id por ende, busca y encuentra /productos/1 y me guarda el 1 */
  const { id } = useParams();
  /** Crea un filtro buscando el id dentro de los productos totales y me regresa el que encontro */
  const infoCamioneta = tiposCamionetas.find(
    /** Compara el id que encontro en la URL contra el id del producto de la lista general, convirtiendolo antes en string */
    (tipoCamionetas) => tipoCamionetas.id.toString() === id
  );
  /** Redirigir a la pagina anterior usando la navegacion que importe*/
  const funcionNavegar = () => {
    navegador(-1);
  };

  return (
    <section className="flex items-center justify-center py-20 border border-gray-600 bg-slate-800 rounded-xl">
      <div className="p-6 rounded-lg shadow-md bg-slate-900 w-80">
      <h1 className="mb-4 text-2xl font-bold text-center uppercase text-orange-400 ">Detalle de la camioneta:</h1>
      <h2 className="mb-2 text-xl font-semibold"> {infoCamioneta.nombre}</h2>
      <p className="mb-4 italic text-gray-500">{infoCamioneta.descripcion} </p>
      <h3 className="mb-4 text-lg font-medium">Precio: $ {infoCamioneta.precio}</h3>
      <button 
      
        onClick={funcionNavegar}
        className="flex items-center justify-center w-full px-4 py-2 font-semibold uppercase transition duration-300 ease-in-out rounded-lg text-slate-800 text-late-900 bg-orange-400 hover:bg-orange-400"
      
      >
        <FaArrowLeft className="mr-2" /> {/* Icono con margen a la derecha */}
        Regresar
      </button>
      </div>
    </section>
  );
};
