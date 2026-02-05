export default function Videos() {
  return (
    <section id="videos" className="py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Videos</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/VIDEO_ID"
          allowFullScreen
        />
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/VIDEO_ID"
          allowFullScreen
        />
      </div>
    </section>
  );
}
