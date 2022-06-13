import { useContext } from "react";

import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

import "./_Projectscreen.scss";
import Data from "../../ProjectData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackContextProvider } from "../../context/BackContext";

export default function ProjectScreen() {
  const { name } = useParams();
  const { preivouspath } = useContext(BackContextProvider);

  let selectedData;

  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === name) {
      selectedData = Data[i];
      break;
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="projectScreen_container">
      <Link to={preivouspath} className="back">
        <MdOutlineArrowBackIosNew />
      </Link>

      <div className="project_wrap">
        <h2 className="project_title">{selectedData.title}</h2>
        <h4 className="project_sub">{selectedData.subtitle}</h4>
        <a
          rel="noreferrer"
          target="_blank"
          href={selectedData.live}
          className="visit_btn"
        >
          visit the website
        </a>

        <div className="slider">
          <Slider {...settings}>
            {selectedData.images.map((item, i) => (
              <img key={i} src={item} alt="slider images" />
            ))}
          </Slider>
        </div>

        <div className="project_info">
          <h3 className="info_title">About the project</h3>
          <p className="project_info_desc">{selectedData.descripion}</p>
          <h3 className="info_title">Technologies</h3>
          <ul className="tech">
            {selectedData.tools.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4 className="project_link">
            The project is online at{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={selectedData.live}
              className="link"
            >
              {selectedData.live}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

//Custom slider arrow
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextButton" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prevButton" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
}
