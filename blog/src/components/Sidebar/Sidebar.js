import { Link } from "react-router-dom";
import "./Sidebar.css";
import meee from "../../img/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE MI</span>
        <img
          src={meee}
          alt=""
          className="imgGrande"
        />
        <p>
        Soy un apasionado de la tecnología y me encuentro inmerso en el emocionante mundo del diseño web y la programación. Mi enfoque se centra en las tecnologías clave como HTML, CSS y JavaScript, que utilizo para dar vida a proyectos web creativos y funcionales. Con experiencia en marketing y comercio electrónico,
siempre he sentido una profunda fascinación por la tecnología y el
mundo digital. En mi nueva etapa como programador junior, estoy
decidido a demostrar mi pasión y habilidades, creando soluciones
impactantes e innovadoras. Estoy listo para enfrentar cualquier
desafío y seguir sorprendiendo al mundo con mis logros.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div> */}
      
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
}