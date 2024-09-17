
import { useParams,useNavigate } from "react-router-dom";

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
      <section>
        <h1>Detalle de la camioneta:</h1>
        <h2>Nombre Camioneta: {infoCarro.nombre}</h2>
        <p>Descripción:{infoCarro.descripcion} </p>
        <h3>Precio: $ {infoCarro.precio}</h3>
        <button onClick={funcionNavegar}>Regresar</button>      
      </section>
    )
  }


