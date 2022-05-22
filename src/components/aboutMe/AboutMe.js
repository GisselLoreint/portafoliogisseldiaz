import './AboutMe.css';
import imgAbouMe from './../../img/img-aboutme.svg';

function AboutMe() {
  return (
    <div className='cont-aboutme'>
      <h1 className="h1-aboutme">Sobre mi</h1>
      <p>Técnica Profesional en Desarrollo de Software,
        graduada del Politécnico Internacional. Con conocimientos
        básicos en Java, Html, Xhtml, MSBD en MySql y Sql Server. </p>
      <p>Se caracteriza por ser seria, responsable y cumplida
        con lo que le asignan, organizada, honesta, respetuosa con las personas que la rodean,
        deseosa de aprender nuevas cosas y con la capacidad de escuchar atentamente lo que le
        quieran dar a conocer. Ayudante de pasteleria. Digitadora y Aux. de archivo.</p>
        <img src={imgAbouMe} alt=""></img>
    </div>
  );
}

export default AboutMe;