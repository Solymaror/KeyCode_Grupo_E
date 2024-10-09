export const Error404 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen tracking-wide bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://your-image-url.com/error-background.jpg')",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-8 text-6xl font-bold text-white">Error 404</h1>
      <p className="mb-4 text-2xl text-white">No se encuentra la pagina</p>
      <a
        href="/"
        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        Volver al inicio
      </a>
    </div>
  );
};
