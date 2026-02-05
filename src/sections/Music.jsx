export default function Music() {
  return (
    <section id="music" className="py-24 px-6 bg-zinc-950">
      <h2 className="text-3xl font-bold mb-10 text-center">Música</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {["Canción 1", "Canción 2", "Canción 3"].map((track) => (
          <div
            key={track}
            className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition"
          >
            <p>{track}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
