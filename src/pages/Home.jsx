import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Music from "../sections/Music";
import Videos from "../sections/Videos";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Music />
      <Videos />
      <Gallery />
      <Contact />
    </>
  );
}
