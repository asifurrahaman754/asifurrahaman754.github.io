import { Section } from "react-scroll-section";
import { BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import ContactForm from "./ContactForm";
import "./_style.scss";

export default function Contact() {
  return (
    <Section id="contact" className="contact_section">
      <div className="contact_wrap">
        <div className="contact_info_details">
          <h3 className="contact_head">Get in touch</h3>
          <p className="contact_sub">
            Have a project or question? Send me a message. I will reply within
            12 hour
          </p>

          <div className="extra_details">
            <h5>
              <span>
                <MdEmail />
              </span>
              asifurrahaman754@gmail.com
            </h5>
            <h5>
              <span>
                <BsTelephoneFill />
              </span>
              +8801850532804
            </h5>
          </div>

          <div className="social_links">
            <a
              target="_blank"
              href="https://www.facebook.com/asif.asifurrahaman.77/"
            >
              <FaFacebookF />
            </a>
            <a target="_blank" href="https://github.com/asifurrahaman754">
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/asifur-rahaman-8b15901a2/"
            >
              <FaLinkedinIn />
            </a>
            {/* <a
              target="_blank"
              href="https://www.youtube.com/channel/UCSy77Lz6FlduetY6nMlFTOw"
            >
              <FaYoutube />
            </a> */}
            <a target="_blank" href="https://twitter.com/asifur754">
              <BsTwitter />
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
