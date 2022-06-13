import "./_AllProject.scss";
import Navbar from "../../components/Navbar";
import { projects } from "../../data";
import ProjectItem from "../../components/Project/ProjectItem";

export default function AllProject() {
  return (
    <>
      <Navbar />
      <div className="allProjects_container">
        <h3 className="allProjects_title">Projects</h3>

        {projects.map((item, i) => (
          <ProjectItem key={i} item={item} />
        ))}
      </div>
    </>
  );
}
