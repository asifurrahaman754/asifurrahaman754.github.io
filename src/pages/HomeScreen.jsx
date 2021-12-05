import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Techtool from "../components/Techtool";

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Techtool />
        <Projects />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}
