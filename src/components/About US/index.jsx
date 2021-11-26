import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import "./_style.scss";

export default function About() {
  return (
    <div className="about_container">
      <Link to="/" className="back">
        <MdOutlineArrowBackIosNew />
      </Link>

      <div className="about_wrapper">
        <img src="/assets/img/me.jpg" alt="me" />
        <div className="about_info">
          <h3>Asifur Rahman</h3>
          <p>
            I am a frontend Web Developer and a UI designer based in Chattogram,
            Bangladesh.
          </p>
          <p>
            I am currently working in online marketplace and looking forward to
            work remotely with a company
          </p>
          <h5>Email me at</h5>
          <span>asifurrahaman754@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
