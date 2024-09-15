import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    
    <nav className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        carros 
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/motos"}
      >
        motos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/bicicletas"}
      >
        bicicletas
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/camionetas"}
      >
        camionetas
      </NavLink>
    </nav>
  );
};

export default Menu;
