import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { auth } from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = ({ onLogin, onLogout }) => {
  const [click, setClick] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">{('home')}</Link>
            </li>
            <li>
              <Link to="/courses">{('courses')}</Link>
            </li>
            <li>
              <Link to="/about">{('about')}</Link>
            </li>
            <li>
              <Link to="/team">{('team')}</Link>
            </li>
            <li>
              <Link to="/pricing">{('pricing')}</Link>
            </li>
            <li>
              <Link to="/contact">{('contact')}</Link>
            </li>
            <li>
              <Link to="/get-certificate" className="nav-item">
                {('getCertificate')}
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">
                    <img
                      src={user.photoURL || 'images/team/t1.webp'}
                      alt="Profile"
                      className="profile-pic"
                    />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">{('login')}</Link>
              </li>
            )}
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;