import React from 'react';
import './Footer.css'; // Asegúrate de tener los estilos CSS correspondientes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLinks">
      <a
          href="https://github.com/Antoniomorales17"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faGithub} className="icon1" />
        </a>
        <a
          href="https://linkedin.com/in/antoniomoralesgimenez/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon1" />
        </a>
      </div>
      <p className="footerText">&copy; {new Date().getFullYear()} Antonio Morales - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
