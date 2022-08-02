import React, { useState, useRef } from "react";

import emailjs from "emailjs-com";
import "../styles/Subscribe.css";

//npm install emailjs-com --save

const Subscribe = ({ placeholder, changeLogoSpeed }) => {
  const [state, setState] = useState({
    email: "",
  });
  const form = useRef();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setState({ email: e.target.value.trim() });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (state.email === "") {
      setEmailIsValid(false);
      return;
    }
    setEmailIsValid(true);

    emailjs
      .sendForm(
        "service_idd7eep",
        "template_5a8bfme",
        form.current,
        "TkS4Y_8M3sr8G4DMs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    changeLogoSpeed();
    setState({ email: "" });
  };
  //service_ID: service_idd7eep
  //template_ID:template_5a8bfme
  //YOUR_PUBLIC_KEY(USER_ID): TkS4Y_8M3sr8G4DMs

  return (
    <form ref={form} onSubmit={sendEmail} className="subscribe">
      <input
        className="subscribe-email"
        name="email"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        required
      />

      {!isSubmitted ? (
        <button
          type="submit"
          className="subscribe-btn"
          onClick={() => setIsSubmitted(!isSubmitted)}
        >
          Notify Me!
        </button>
      ) : (
        <button type="button" className="subscribe-btn">
          You're In!
        </button>
      )}
    </form>
  );
};

export default Subscribe;
