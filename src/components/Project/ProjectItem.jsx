import { BsBoxArrowInUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectItem({ item }) {
  const navigate = useNavigate();
  const path = item.name.split(" ").join("-");

  const handleClick = () => {
    navigate(`/portfolio/${path}`);
  };

  return (
    <div className="project_card">
      <div className="project_details">
        <h2 className="project_title">{item.name}</h2>
        <p className="project_desc">{item.desc}</p>

        <div className="project_interect">
          <button onClick={handleClick} className="case_study">
            Case study{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
          <div className="project_links">
            <span className="project_live">
              live <BsBoxArrowInUpRight />
            </span>
            <span className="project_github">
              Github <BsBoxArrowInUpRight />
            </span>
          </div>
        </div>
      </div>
      <div className="project_img">
        <LazyLoadImage alt={item.name} src={item.image} />
      </div>
    </div>
  );
}
