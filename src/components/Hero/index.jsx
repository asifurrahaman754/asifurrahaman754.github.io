import { FiChevronsDown } from "react-icons/fi";
import { useScrollSection } from "react-scroll-section";

import "./_style.scss";

export default function Hero() {
  const projectSection = useScrollSection("portfolio");

  return (
    <div className="hero_container">
      <div className="hero_bg">
        <h3 className="hero_header">Hi, I'm Asif</h3>
        <h5 className="hero_Subheader">
          I am a freelance web developer and a UI designer specializing in
          Frontend. Checkout my work below and feel free to get in touch
        </h5>
        <div className="hero_btn">
          <a
            onClick={projectSection.onClick}
            href="#projects"
            className="project_btn"
          >
            <img src="/assets/img/project.svg" alt="project icon" />
            Projects
          </a>

          <a
            href="#projects"
            className="resume_btn"
            href="/assets/Resume.pdf"
            download
          >
            <img src="/assets/img/resume.svg" alt="resume icon" />
            Resume
          </a>
        </div>

        <a href="#techTools" className="down_arrow">
          <FiChevronsDown />
        </a>
      </div>
    </div>
  );
}
