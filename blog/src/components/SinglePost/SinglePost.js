import { Link } from "react-router-dom";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/5063576/pexels-photo-5063576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        Mi Viaje como Desarrollador Junior: Comenzando en el Mundo de la Programación
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {/* <Link className="link" to="/posts?username=Safak"> */}
                Antonio Morales
              {/* </Link> */}
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        ¡Hola a todos!

Hoy marco el inicio de un emocionante viaje hacia el mundo de la programación como un desarrollador junior. Mi nombre es [Tu Nombre] y estoy emocionado por compartir mi experiencia y aprendizaje a medida que me aventuro en este apasionante campo.

La programación siempre me ha intrigado, y a medida que exploraba diferentes lenguajes y tecnologías, me di cuenta de que tenía un apetito insaciable por resolver problemas y crear soluciones. Así que, finalmente, decidí dar el salto y sumergirme en el maravilloso mundo del desarrollo de software.

Este blog será mi espacio personal para documentar mi progreso, aprender de mis errores y compartir las victorias a lo largo de mi trayecto. Planeo abordar temas como lenguajes de programación, proyectos personales, desafíos técnicos y las lecciones que aprenda en el camino.

No soy un experto, ni pretendo serlo. Soy un novato con un ardiente deseo de aprender y crecer. Estoy seguro de que enfrentaré obstáculos, pero también sé que cada obstáculo superado me acercará un paso más a mi objetivo de convertirme en un desarrollador competente.

Espero que este blog no solo sea una ventana a mi propio viaje, sino que también pueda servir de inspiración y recurso para otros aspirantes a desarrolladores. ¡Si estás en el mismo camino o simplemente estás interesado en el mundo de la programación, te invito a unirte a mí en esta aventura!

¡Gracias por acompañarme en este viaje y espero que disfrutes del contenido que compartiré aquí!

¡Hagamos que la programación sea divertida y significativa!
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}