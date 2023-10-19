import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHome, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub as fabGithub, faLinkedin as fabLinkedin } from "@fortawesome/free-brands-svg-icons"; // Agrega los íconos de redes sociales

import img from "../../img/yo.png";

export default function Topbar() {
  const user = true; // Puedes ajustar esto según tu lógica de autenticación

  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://github.com/Antoniomorales17"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/antoniomoralesgimenez/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <FontAwesomeIcon icon={faHome} className="icon" /> HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              <FontAwesomeIcon icon={faPenSquare} className="icon" /> PUBLICAR
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={img}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                POSTS
              </Link>
            </li>
            {/* <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
