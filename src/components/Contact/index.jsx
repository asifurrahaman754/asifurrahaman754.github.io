import { Section } from "react-scroll-section";
import ContactForm from "./ContactForm";
import "./_style.scss";

export default function Contact() {
  return (
    <Section id="contact" className="contact_section">
      <div className="contact_wrap">
        <ContactForm />
        <div className="details_box">
          <h3>Email me at</h3>
          <h5>asifurrahaman754@gmail.com</h5>
          <h3>Call me at</h3>
          <h5>+8801850532804</h5>
        </div>
      </div>
    </Section>
  );
}
