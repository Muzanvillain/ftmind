import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setSuccessMessage("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setError("Error sending message. Please try again later.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6475.46225216498!2d0.5525778653105133!3d35.7574128572671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12818320eb95730b%3A0xad19769ec82be149!2sCite%20Chemirik%2C%20Relizane!5e0!3m2!1sen!2sdz!4v1718056859619!5m2!1sen!2sdz"
              title="Google Maps"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <h1>Contact us</h1>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="items grid2">
                  <div className="box">
                    <h4>ADDRESS:</h4>
                    <p>Relizane</p>
                  </div>
                  <div className="box">
                    <h4>EMAIL:</h4>
                    <p>chaima@gmail.com</p>
                  </div>
                  <div className="box">
                    <h4>PHONE:</h4>
                    <p>+213 798574651</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Create a message here..."
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;