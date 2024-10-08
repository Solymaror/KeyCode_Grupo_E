/* eslint-disable no-unused-vars */
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
      precio:"5.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_690024-MCO74383264315_022024-F.webp",
    },
    {
      id: 2,
      nombre: "Specialized",
      descripcion:
        "Famosa por sus bicicletas de montaña y de carretera de alta calidad. Es conocida por su innovación tecnológica.",
      precio: "2.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_811536-MCO51446282216_092022-O.webp",
    },
    {
      id: 3,
      nombre: "Cannondale",
      descripcion:
        "Reconocida por sus bicicletas ligeras y de alto rendimiento, tanto de montaña como de carretera",
      precio: "3.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_892375-MCO54270566538_032023-O.webp",
    },
    {
      id: 4,
      nombre: "Giant",
      descripcion:
        "Es uno de los fabricantes de bicicletas más grandes del mundo. Ofrecen una amplia gama de bicicletas, desde básicas hasta profesionales.",
      precio: "7.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_630156-MLU76488664940_052024-O.webp",
    },
  ]);
  /* Listado tipos de Carros */
  const [tiposCarros, setTiposCarros] = useState([
    {
      id: 1,
      nombre: "Maserati MC20",
      descripcion:
        "El superdeportivo de Maserati que desafía los límites del tiempo. Avanza hacia un emocionante y nuevo futuro.",
      precio: "1.293.320.031" ,
      img: "https://assets.local-car-finder.com/images/_2023/maserati/mc20/2023-maserati-mc20-main.png"
    },
    {
      id: 2,
      nombre: "Ferrari F50",
      descripcion:
        "Creado para celebrar el 50 aniversario de Ferrari, el F50 fue lo más cercano a un Fórmula 1 de calle que la compañía había construido hasta la fecha.",
      precio: "23.373.747.360" ,
      img: "https://www.pngplay.com/wp-content/uploads/13/Ferrari-F50-Transparent-Image.png"
    },
    {
      id: 3,
      nombre: "Pagani Huayra",
      descripcion:
        "El Pagani Huayra es un automóvil superdeportivo producido por el fabricante italiano Pagani Automobili S.p.A. El nombre proviene de huayra, que significa viento en quechua",
      precio: "32.739.737.079" ,
      img: "https://purepng.com/public/uploads/large/purepng.com-pagani-huayra-sports-carcarcarsvehiclevehiclestransport-561521126343mx1ua.png"
    },
    {
      id: 4,
      nombre: "Mercedes-Benz EQS",
      descripcion:
        "El Mercedes-Benz EQS es el sedán eléctrico que redefine el confort, con un diseño elegante y vanguardista, autonomía impresionante y tecnología de última generación",
      precio: "649.900.000" ,
      img: "https://assets.local-car-finder.com/images/_2022/mercedes-benz/eqs/450-Sedan.png"
    },
  ]);
  /* Listado tipos de Motos */
  const [tiposMotos, setTiposMotos] = useState([
    {
      id: 1,
      nombre: "Yamaha - XTZ 125",
      descripcion:
        "Una moto de aventura compacta, ideal para caminos off-road y uso urbano.",
      precio: "8.000.000" ,
      img: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/xtz-125-azul.jpg",
    },
    {
      id: 2,
      nombre: "Harley-Davidson - Iron 883",
      descripcion:
        "Motocicleta cruiser con un motor V-twin de 883 cc. Estilo clásico y potente.",
      precio: "20.000.000",
      img: "https://http2.mlstatic.com/D_NQ_NP_780985-MCO79320962273_092024-O.webp",
    },
    {
      id: 3,
      nombre: "Honda - CBR 600RR",
      descripcion:
        "Deportiva con un motor de 599 cc. Ideal para velocidad y rendimiento en pista.",
      precio: "12.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_957671-MCO78962884212_092024-F.webp",
    },
    {
      id: 4,
      nombre: "BMW - R1250GS",
      descripcion:
        "Motocicleta de aventura con tecnología avanzada y alto rendimiento en terrenos variados.",
      precio: "18.000.000" ,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_914301-MCO77736336639_072024-F.webp",
    },
  ]);

  /* Listado tipos de Camionetas */
  const [tiposCamionetas, setTiposCamionetas] = useState([
    {
      id: 1,
      nombre: "Toyota Hilux",
      descripcion:
        "Toyota Hilux 2024, 4x4, motor diésel de 2.8 litros, capacidad de carga de 1 tonelada. Ideal para terrenos difíciles y uso rudo.",
      precio: "150.000.000" ,
      img:"https://toyotacvi.com.co/wp-content/uploads/2021/03/4.-Hilux-TP-Plata-metalico.png"
    },
    {
      id: 2,
      nombre: "Ford Ranger 2024",
      descripcion:
        "Ford Ranger 2024, 4x4, motor turbo diésel de 3.2 litros, equipado con tecnología de asistencia en manejo todo terreno.",
      precio: "150.000.000" ,
      img:"https://live.dealer-asset.co/images/br1166/product/paintSwatch/vehicle/ford-paraguay-nueva-ranger-naranja.png?s=1024"
    },
    {
      id: 3,
      nombre: "Chevrolet Colorado 2024",
      descripcion:
        "Chevrolet Colorado 2024, motor V6 de 3.6 litros, capacidad de remolque de hasta 3,500 kg, con diseño robusto y cómodo.",
      precio: "147.200.000" ,
      img:"https://vehicle-images.dealerinspire.com/stock-images/chrome/2a4dcf28583a56f2da23704db72a6d83.png"
    },
    {
      id: 4,
      nombre: "Nissan Frontier 2024",
      descripcion:
        "Nissan Frontier 2024, 4x4, motor de 2.5 litros, equipado con sistema de control dinámico en curvas y asistente de ascenso en pendientes.",
      precio: "136.000.000" ,
      img:"https://vehicle-images.dealerinspire.com/stock-images/chrome/51f934327788d5983ba90216e734b085.png" 
    },
  ]);

  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        <h1 className="text-5xl font-semibold tracking-wide uppercase text-sky-500">
          Concesionario
        </h1>
        {/* Componente Menu */}
        <Menu />
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          {/* Página de carros */}
          <Route path="/" element={<Carros tiposCarros={tiposCarros} />} />
          {/* Pagina individual de los tipos de carros */}
          <Route
            path="/carros/:id"
            element={<CarrosDetalle tiposCarros={tiposCarros} />}
          />

          {/* Página de motos */}
          <Route path="/motos" element={<Motos tiposMotos={tiposMotos} />} />
          {/* Pagina individual de los tipos de motos */}
          <Route
            path="/motos/:id"
            element={<MotosDetalle tiposMotos={tiposMotos} />}
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
          <Route
            path="/camionetas"
            element={<Camionetas tiposCamionetas={tiposCamionetas} />}
          />
          {/* Pagina individual de las camionetas */}
          <Route
            path="/camionetas/:id"
            element={<CamionetasDetalle tiposCamionetas={tiposCamionetas} />}
          />

          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
