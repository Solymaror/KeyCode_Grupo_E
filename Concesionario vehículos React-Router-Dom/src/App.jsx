import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import {
  Error404,
  Carros,
  CarrosDetalle,
  Motos,
  MotosDetalle,
  Bicicletas,
  BicicletasDetalle,
  Camionetas,
  CamionetasDetalle,
} from "./pages";
import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";

function App() {

  /* Listado tipos de bicicletas */
  const [tiposBicicletas, setTiposBicicletas] = useState([
    {
      id: 1,
      nombre: "Trek",
      descripcion:
        "Una de las marcas más grandes y conocidas del mundo. Ofrece bicicletas de carretera, montaña y eléctricas.",
      precio: 5000000,
    },
    {
      id: 2,
      nombre: "Specialized",
      descripcion:
        "Famosa por sus bicicletas de montaña y de carretera de alta calidad. Es conocida por su innovación tecnológica.",
      precio: 2000000,
    },
    {
      id: 3,
      nombre: "Cannondale",
      descripcion:
        "Reconocida por sus bicicletas ligeras y de alto rendimiento, tanto de montaña como de carretera",
      precio: 3000000,
    },
    {
      id: 4,
      nombre: "Giant",
      descripcion:
        "Es uno de los fabricantes de bicicletas más grandes del mundo. Ofrecen una amplia gama de bicicletas, desde básicas hasta profesionales.",
      precio: 7000000,
    },
  ]);
  /* Listado tipos de Carros */
  const [tiposBicicletas, setTiposBicicletas] = useState([
    {
      id: 1,
      nombre: "Trek",
      descripcion:
        "Una de las marcas más grandes y conocidas del mundo. Ofrece bicicletas de carretera, montaña y eléctricas.",
      precio: 5000000,
    },
    {
      id: 2,
      nombre: "Specialized",
      descripcion:
        "Famosa por sus bicicletas de montaña y de carretera de alta calidad. Es conocida por su innovación tecnológica.",
      precio: 2000000,
    },
    {
      id: 3,
      nombre: "Cannondale",
      descripcion:
        "Reconocida por sus bicicletas ligeras y de alto rendimiento, tanto de montaña como de carretera",
      precio: 3000000,
    },
    {
      id: 4,
      nombre: "Giant",
      descripcion:
        "Es uno de los fabricantes de bicicletas más grandes del mundo. Ofrecen una amplia gama de bicicletas, desde básicas hasta profesionales.",
      precio: 7000000,
    },
  ]);
  /* Listado tipos de Motos */
  const [tiposBicicletas, setTiposBicicletas] = useState([
    {
      id: 1,
      nombre: "Trek",
      descripcion:
        "Una de las marcas más grandes y conocidas del mundo. Ofrece bicicletas de carretera, montaña y eléctricas.",
      precio: 5000000,
    },
    {
      id: 2,
      nombre: "Specialized",
      descripcion:
        "Famosa por sus bicicletas de montaña y de carretera de alta calidad. Es conocida por su innovación tecnológica.",
      precio: 2000000,
    },
    {
      id: 3,
      nombre: "Cannondale",
      descripcion:
        "Reconocida por sus bicicletas ligeras y de alto rendimiento, tanto de montaña como de carretera",
      precio: 3000000,
    },
    {
      id: 4,
      nombre: "Giant",
      descripcion:
        "Es uno de los fabricantes de bicicletas más grandes del mundo. Ofrecen una amplia gama de bicicletas, desde básicas hasta profesionales.",
      precio: 7000000,
    },
  ]);

    /* Listado tipos de Camionetas */
    const [tiposBicicletas, setTiposBicicletas] = useState([
      {
        id: 1,
        nombre: "Trek",
        descripcion:
          "Una de las marcas más grandes y conocidas del mundo. Ofrece bicicletas de carretera, montaña y eléctricas.",
        precio: 5000000,
      },
      {
        id: 2,
        nombre: "Specialized",
        descripcion:
          "Famosa por sus bicicletas de montaña y de carretera de alta calidad. Es conocida por su innovación tecnológica.",
        precio: 2000000,
      },
      {
        id: 3,
        nombre: "Cannondale",
        descripcion:
          "Reconocida por sus bicicletas ligeras y de alto rendimiento, tanto de montaña como de carretera",
        precio: 3000000,
      },
      {
        id: 4,
        nombre: "Giant",
        descripcion:
          "Es uno de los fabricantes de bicicletas más grandes del mundo. Ofrecen una amplia gama de bicicletas, desde básicas hasta profesionales.",
        precio: 7000000,
      },
    ]);
  

  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        <h1>Concesionario</h1>
        {/* Componente Menu */}
        <Menu />
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          {/* Página de carros */}
          <Route path="/" element={<Carros />} />
          {/* Pagina individual de los tipos de carros */}
          <Route
            path="/carros/:id"
            element={<CarrosDetalle tiposBicicletas={tiposBicicletas} />}
          />

          {/* Página de motos */}
          <Route path="/motos" element={<Motos />} />
          {/* Pagina individual de los tipos de motos */}
          <Route
            path="/motos/:id"
            element={<MotosDetalle tiposBicicletas={tiposBicicletas} />}
          />

          {/* Pagina  de bicicletas*/}
          <Route
            path="/bicicletas"
            element={<Bicicletas tiposBicicletas={tiposBicicletas} />}
          />
          {/* Pagina individual de las bicicletas */}
          <Route
            path="/bicicletas/:id"
            element={<BicicletasDetalle tiposBicicletas={tiposBicicletas} />}
          />

          {/* Pagina general de camionetas */}
          <Route path="/camionetas" element={<Camionetas />} />
          {/* Pagina individual de las camionetas */}
          <Route
            path="/camionetas/:id"
            element={<CamionetasDetalle tiposBicicletas={tiposBicicletas} />}
          />

          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
