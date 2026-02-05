export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-950">
      <h2 className="text-3xl font-bold mb-10 text-center">Galería</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <img
            key={img}
            src={`/src/assets/images/gallery/${img}.jpg`}
            className="rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
