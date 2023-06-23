import React, { useState } from 'react'

function componente5  (props)  {
    const [titulo, setTitulo] = useState('ORQUÍDEA');
    const [imagen, setImagen] = useState('./img/foto1.png');
    const [parrafo, setParrafo] = useState('Las orquídeas u orquidáceas son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas');
  
    const handleClick = (e) => {
      const valor = e.target.getAttribute('name');
      switch (valor) {
        case 'ORQUÍDEA':
          setTitulo(valor);
          setImagen('./img/foto1.png');
          setParrafo('Las orquídeas u orquidáceas son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas');
          break;
        case 'GIRASOL':
          setTitulo(valor);
          setImagen('./img/foto2.png');
          setParrafo('Los girasoles u mirasoles familia de las asterácea con sus petalos amarillos y semillas cafes caractesidas por moverse en dirección al sol para recibir su luz y cultivada por ser alimenticia, oleaginosa y ornamental en todo el mundo');
          break;
        case 'ROSA':
          setTitulo(valor);
          setImagen('./img/foto3.png');
          setParrafo('Las rosas son la flor de un grupo de arbustos generalmente espinosos y floridos representantes principales de las rosáceas. Se cultivan como ornamentales por la belleza y fragancia de su flor; pero también para la extracción de aceite esencial, utilizado en perfumería y cosmética, usos medicinales y gastronómicos');
          break;
        case 'MARGARITA':
          setTitulo(valor);
          setImagen('./img/foto4.png');
          setParrafo('Las margaritas es una planta herbácea de la familia de las asteráceas. sus hojas son verdes y sus flores, muy conocidas: pétalos alargados y blancos, en torno a un botón circular amarillo. muy utilizada a efectos decorativos mezclada con el césped, por sus colores y su resistencia a la siega');
          break;
        case 'PALMA CERA':
          setTitulo(valor);
          setImagen('./img/foto5.png');
          setParrafo('La palma de cera es una palma nativa de los bosques Colombianos. Sus hojas son verde oscuras y grisáceas. El tronco es cilíndrico, liso, cubierto de cera y puede crecer hasta los 70M. Su cera se usa para fabricar velas, su tronco como buena madera y su fruto para el ganado');
          break;
        default:
          break;
      }
    };
  
    return (
      <div id="seccion3" style={{ backgroundColor: '#e5f4dc' }} className="row seccion">
        <a href="#nav">
          <h1 id="contexto" className="titulo">
            {props.titulo}
          </h1>
        </a>
  
        <div className="col-lg-7 col-md-12">
          <div id="contenidoContexto">
            <div id="fondoc">
  
              <div className="fondoi">
                <h5 id="title">{titulo}</h5>
                <img id="image" src={imagen} alt="" />
              </div>
  
              <div id="navcontext">
                <div id="buttons">
                  <div name="ORQUÍDEA" className="numeros" onClick={handleClick}>1</div>
                  <div name="GIRASOL" className="numeros" onClick={handleClick}>2</div>
                  <div name="ROSA" className="numeros" onClick={handleClick}>3</div>
                  <div name="MARGARITA" className="numeros" onClick={handleClick}>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-lg col-md-12 d-flex align-items-center">
          <div className="parrafof">
            <p id="paragraph" className="parrafo">{parrafo}</p>
          </div>
        </div>
      </div>
    );
  }

export default componente5