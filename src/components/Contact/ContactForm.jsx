import { useState, useEffect, useRef, forwardRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { GoSmiley } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = forwardRef(function () {
  const [state, handleSubmit] = useForm("meqnjgwg");
  const [sending, setsending] = useState(false);
  const [success, setsuccess] = useState(false);

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setsending(false);
      setsuccess(true);
    }
  }, [state.succeeded]);

  const clickSubmit = () => {
    //check if the input field are not empty
    if (
      nameRef?.current.value &&
      messageRef?.current.value &&
      mailRef?.current.value
    ) {
      setsending(true);
    }
  };

  //change the color of the InputIcon whenever user do focus in input
  const handleInputFocus = (type, state) => {
    if (state === "blur") {
      const el = document.getElementsByClassName(`${type}Icon`)[0];
      el.style.color = "black";
    } else {
      const el = document.getElementsByClassName(`${type}Icon`)[0];
      el.style.color = "#0b68de";
    }
  };

  return (
    <>
      {!success ? (
        <div className="contact_form_wrap">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <div className="input_wrap">
              <span className="inputIcon nameIcon">
                <FiUser />
              </span>
              <input
                onFocus={() => handleInputFocus("name")}
                onBlur={() => handleInputFocus("name", "blur")}
                ref={nameRef}
                required
                type="text"
                name="name"
                id="name"
              />
            </div>

            <label htmlFor="Email">Email</label>
            <div className="input_wrap">
              <span className="inputIcon EmailIcon">
                <AiOutlineMail />
              </span>
              <input
                onFocus={() => handleInputFocus("Email")}
                onBlur={() => handleInputFocus("Email", "blur")}
                ref={mailRef}
                required
                type="email"
                name="Email"
                id="Email"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="Message">Message</label>
            <textarea
              required
              placeholder="write your message"
              name="message"
              rows="8"
              ref={messageRef}
              id="Message"
            ></textarea>
            <button
              onClick={clickSubmit}
              disabled={state.submitting}
              type="submit"
            >
              Submit {sending && <span className="spinner"></span>}
            </button>
          </form>
        </div>
      ) : (
        <p className="form_confirmation">
          Email sent successfully{" "}
          <span>
            <GoSmiley />
          </span>
        </p>
      )}
    </>
  );
});

export default ContactForm;
