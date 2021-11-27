import { Section } from "react-scroll-section";

import "./_style.scss";
import { projects } from "../../data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <Section id="portfolio" className="projects_container">
      <h3 className="projects_title">Projects</h3>
      <div className="projects_wrapper">
        {projects.slice(0, 4).map((item, i) => (
          <ProjectItem key={i} item={item} />
        ))}
      </div>

      <button className="more_projects">More projects</button>
    </Section>
  );
}
