import React from "react";
import "./Body.css";
import logo from '../../assets/logo.png'; 

function Body({ isDropdownOpen }) {
  return (
    <div className="container mt-30" style={{
      marginTop: isDropdownOpen ? "60px" : "0",
    }}>
      <div className="logo-slogan-container mb-4">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Logo CodeBoost Academy" />
          </div>
        </div>
        <div className="slogan-container">
          <div className="slogan">
            Nos apasiona la programación y creemos en el poder de la comunidad.
            Este espacio está diseñado para formadores, programadores y
            desarrolladores junior que buscan recursos organizados y
            actualizados sobre diversos lenguajes de programación. Aquí podrás
            acceder a materiales didácticos de alta calidad, creados por
            expertos, y también compartir tus propios recursos con nuestra
            comunidad vibrante. No importa si eres un educador buscando nuevas
            herramientas, un programador experimentado queriendo perfeccionar
            tus habilidades, o un desarrollador junior dando tus primeros pasos;
            en CodeBoost Academy, encontrarás el apoyo y los conocimientos que
            necesitas para impulsar tu carrera al siguiente nivel. ¡Únete a
            nuestra comunidad hoy mismo y transforma el futuro de la
            programación!
          </div>
        </div>
      </div>
      <div className="mt-4 text-container">
      En esta emocionante travesía, nos enfocaremos en <strong>JavaScript</strong>, uno de los lenguajes de programación más dinámicos y versátiles. Utilizado en millones de sitios web y aplicaciones, JavaScript es sinónimo de interactividad y modernidad. <br /><br /> <strong>¿Por qué aprender JavaScript?</strong> Porque es una habilidad invaluable que abrirá puertas en la industria tecnológica. JavaScript te permite construir aplicaciones web dinámicas y responsivas, habilidades altamente demandadas en el mercado laboral actual. Además, formarás parte de una comunidad global de desarrolladores apasionados, listos para colaborar y compartir conocimientos. <br /><br /> En CodeBoost Academy, creemos que cada línea de código es un paso hacia un futuro mejor. Con JavaScript, tendrás las herramientas para innovar y crear soluciones que transformen el mundo. ¡Únete a nosotros y empieza a impulsar tu código hoy mismo!
      </div>
    </div>
  );
}

export default Body;
