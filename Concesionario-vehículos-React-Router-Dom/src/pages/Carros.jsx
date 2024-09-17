import { Link } from "react-router-dom"

  export const Carros = ({tiposCarros}) => {
    return (
      <div>
        <h1>Carros</h1>
        <ul>
          {tiposCarros.map((tipoCarros) => (
            <li key={tipoCarros.id}>
              <Link to={`/carros/${tipoCarros.id}`}>{tipoCarros.nombre}</Link>
            </li>
          ))}
        </ul>
      </div>
      
    )
  }

// export const Camionetas = ({ tiposCamionetas}) => {
//   return (
//     <div>
//       <h1>camionetas</h1>
//       <ul>
//         {tiposCamionetas.map((tipoCamionetas) => (
//           <li key={tipoCamionetas.id}>
//             <Link to={`/camionetas/${tipoCamionetas.id}`}>{tipoCamionetas.nombre}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };