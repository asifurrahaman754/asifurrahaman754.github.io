import Blogs from "../Blogs";
import Contact from "../Contact";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Projects from "../Project";
import Techtool from "../Techtool";

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
      <Footer />
    </>
  );
}
