import React from 'react';
import './Footer.css'; // Asegúrate de tener los estilos CSS correspondientes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      
      <p className="footerText">&copy; {new Date().getFullYear()} Antonio Morales - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
