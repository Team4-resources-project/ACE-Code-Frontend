import React from "react";
import "./Body.css";
import logo from '../../assets/logo.png'; // Importa la imagen

function Body() {
  return (
    <div className="container mt-30">
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
        En esta emocionante travesía, nos enfocaremos en <strong>JAVA</strong>, uno de
        los lenguajes de programación más influyentes y versátiles. Utilizado en
        millones de dispositivos, desde aplicaciones móviles hasta sistemas
        empresariales, JAVA es sinónimo de estabilidad y eficiencia.
        <br /><br />
        <strong>¿Por qué aprender JAVA?</strong> Porque es una habilidad invaluable que abrirá puertas en la industria tecnológica. JAVA te permite construir aplicaciones seguras y escalables, habilidades
        altamente demandadas en el mercado laboral actual. Además, formarás parte de una comunidad global
        de desarrolladores apasionados, listos para colaborar y compartir conocimientos.
        <br /><br />
        En CodeBoost Academy, creemos que cada línea de código es un paso hacia un futuro mejor. Con JAVA, tendrás las herramientas para innovar y crear soluciones que transformen el mundo. ¡Únete a nosotros y empieza a impulsar tu código hoy mismo!
      </div>
    </div>
  );
}

export default Body;
