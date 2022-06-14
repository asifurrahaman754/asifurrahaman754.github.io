import { BiBook } from "react-icons/bi";
import "./_style.scss";

export default function Education() {
  return (
    <div className="education_container">
      <h3 className="header">
        <span>
          <BiBook />
        </span>{" "}
        Education
      </h3>

      <div className="wrapper">
        <div className="center-line">
          <span className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </span>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="education_deg">
              <h4 className="title">Diploma in Computer Engineering</h4>
              <span className="time">2018 - current</span>
              <h5 className="institute">Chattogram Polytechnic Institute</h5>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="education_deg">
              <h4 className="title">Secondary School Certificate</h4>
              <span className="time">2017 - 2018 </span>
              <h5 className="institute">Sitakund Govt Model High School</h5>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
