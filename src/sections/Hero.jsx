import patty from "../assets/images/patty2hd-recortado.png";
export default function Hero() {
  return (
    <section className="hero h-screen relative flex items-center justify-center">
      <img
        src={patty}
        alt="Artista"
        className="absolute inset-0 w-[60%] h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600">
          Patty Mondaka
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Música en vivo · Shows · Eventos
        </p>
      </div>
    </section>
  );
}
