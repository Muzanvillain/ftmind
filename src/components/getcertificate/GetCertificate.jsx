import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./getcertificate.css";

const GetCertificate = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "certificates"), {
        email,
        username,
        password,
        userId: user.uid,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setSuccessMessage("Your certificate has been generated successfully!");
      setEmail("");
      setUsername("");
      setPassword("");
      // DOWNLOAD  AND GENERATE PDF FILE CODE
      
      
      
    } catch (error) {
      setError("Error generating certificate. Please try again later.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="certificate-container">
      <h1>Get Your Certificate</h1>
      <form onSubmit={handleSubmit} className="certificate-form">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Generate Certificate
        </button>
      </form>
    </div>
  );
};

export default GetCertificate;