import { Link } from "react-router-dom";
import { useScrollSection } from "react-scroll-section";
import "./_style.scss";

export default function Navbar() {
  const projectSection = useScrollSection("portfolio");
  const blogSection = useScrollSection("blog");
  const contactSection = useScrollSection("contact");

  return (
    <header className="nav_container">
      <div className="nav_max">
        <h1 className="brand_logo">Asifur</h1>
        <nav>
          <Link className="nav_link" to="/">
            Home
          </Link>
          <Link
            className="nav_link"
            to=""
            onClick={projectSection.onClick}
            selected={projectSection.selected}
          >
            Portfolio
          </Link>
          <Link
            className="nav_link"
            to=""
            onClick={blogSection.onClick}
            selected={blogSection.selected}
          >
            Blog
          </Link>
          <Link className="nav_link" to="/about">
            About
          </Link>
          <Link
            className="nav_link"
            to=""
            onClick={contactSection.onClick}
            selected={contactSection.selected}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
