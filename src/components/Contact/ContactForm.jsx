import { useState, useEffect, useRef, forwardRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { GoSmiley } from "react-icons/go";

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

  return (
    <>
      {!success ? (
        <div className="contact_form_wrap">
          <h3 className="contact_head">Contact now</h3>
          <p className="contact_sub">
            Have a project or question? Send me a message. I will reply within
            12 hour
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              required
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              ref={mailRef}
              required
              type="email"
              placeholder="Email"
              name="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea
              required
              placeholder="write your message"
              name="message"
              ref={messageRef}
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
