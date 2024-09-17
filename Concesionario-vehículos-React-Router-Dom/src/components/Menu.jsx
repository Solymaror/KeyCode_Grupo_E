import { NavLink } from "react-router-dom";
/* Iconos */
import { FaCar, FaMotorcycle, FaBicycle, FaTruck } from "react-icons/fa"

const Menu = () => {
  return (
    <nav className="flex p-4 my-10 space-x-4 uppercase border border-gray-600 border-solid menu bg-slate-900 rounded-xl">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " text-sky-500 font-semibold border-b-2 border-sky-500"
            : "text-gray-600 hover:text-sky-500"
        }
        to={"/"}
      >
        <FaCar className="inline mr-2" /> {/* Icono de carro */}
        carros
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " text-sky-500 font-semibold border-b-2 border-sky-500"
            : "text-gray-600 hover:text-sky-500"
        }
        to={"/motos"}
      >
        <FaMotorcycle className="inline mr-2" /> {/* Icono de moto */}
        motos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " text-sky-500 font-semibold border-b-2 border-sky-500"
            : "text-gray-600 hover:text-sky-500"
        }
        to={"/bicicletas"}
      >
        <FaBicycle className="inline mr-2" />  {/* Icono de bicicleta */}
        bicicletas
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " text-sky-500 font-semibold border-b-2 border-sky-500"
            : "text-gray-600 hover:text-sky-500"
        }
        to={"/camionetas"}
      >
        <FaTruck className="inline mr-2" /> {/* Icono de camioneta */}
        camionetas
      </NavLink>
    </nav>
  );
};

export default Menu;
