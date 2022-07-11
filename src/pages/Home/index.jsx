import Blogs from "../../components/Blogs";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Project";
import Techtool from "../../components/Techtool";
import Tweet from "../../components/Tweet";
import "./Home.scss";

export default function HomeScreen() {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <Hero />
      </div>
      <main>
        <Techtool />
        <Projects />
        <Blogs />
        <Tweet />
        <Contact />
      </main>
    </>
  );
}
