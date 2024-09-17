/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";

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
    <section>
      <h1>Detalle de la camioneta:</h1>
      <h2>Nombre Camioneta: {infoCamioneta.nombre}</h2>
      <p>Descripción:{infoCamioneta.descripcion} </p>
      <h3>Precio: $ {infoCamioneta.precio}</h3>
      <button onClick={funcionNavegar}>Regresar</button>
    </section>
  );
};
