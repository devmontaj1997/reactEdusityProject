import SectionTitle from "../sectionTitle/SectionTitle";
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import Container from "../../components/Container/Container";
import submiteArrow from "../../assets/white-arrow.png";

import "./Contact.css";
import Button from "../Button/Button";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3815b08-90be-4957-ac98-8768976199dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className="contact">
    <Container>
        <SectionTitle subHeading="Contact Us" heading="Get in Touch" />

        <div className="contactArea">
          <div className="contactLeft">
            <div className="headingArea">
              <h2>Send us a message</h2>
              <img src={msgicon} alt="" />
            </div>
            <div className="textArea">
              <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>
            </div>
            <div className="listArea">
              <ul>
                <li>
                  <img src={mailicon} alt="" />
                  <p> Contactdevmontaj.dev</p>
                </li>
                <li>
                  <img src={phoneicon} alt="" />
                  <p> 8481803761</p>
                </li>
                <li>
                  <img src={locationicon} alt="" />
                  <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactRight">
            <div className="formArea">
              <form onSubmit={onSubmit}>
                <div className="allInput">
                  <label> Your name</label>
                  <div>
                    <input type="text" name="name" placeholder="Enter your name" />
                  </div>
                </div>
                <div>
                  <label> Phone Number</label>
                  <div>
                    <input type="text" name="phoneNumber" placeholder="Enter your mobile number" />
                  </div>
                </div>
                <div>
                  <label> Your Email </label>
                  <div>
                    <input type="text" name="email" placeholder="Enter your email id" />
                  </div>
                </div>
                <div>
                  <label>Write your messages here</label>
                  <div>
                    <textarea
                      name="message"
                      id=""
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>

                <div className="submiteButton">
                  <Button>
                    <div className="buttonContent">
                      <p>See more here </p>
                      <img src={submiteArrow} alt="" />
                    </div>
                  </Button>
                </div>
                <p>{result}</p>
              </form>
            </div>
          </div>
        </div>
      </Container>

    </div>
     
    </>
  );
};

export default Contact;
