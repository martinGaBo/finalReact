import React from 'react';


function componente8(props) {
    return (
        <div>
            <footer className="row seccion" style={{backgroundColor: "#e3ffe3"}}>
    <a href="#nav">
      <h1 className="titulo">
        CONTÁCTANOS
      </h1>
    </a>
    <div className="row">
      <div className="col-4">

      </div>
      <div className="col-4">
        <div className="subtitulo">
          <p>preguntas frecuentes</p>
        </div>
        <form className="d-flex flex-column align-items-center" id="formulario" action="">
          <label for="exampleFormControlTextarea1" className="form-label">

          </label>
          <textarea placeholder="MENSAJE:" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button id="envi" type="submit">Enviar</button>
        </form>
      </div>

      <div className="col-4"></div>
    </div>

    <div className="row">
      <div className="col"></div>
      <div className="col d-flex justify-content-center">
        <button className="iconos">
          <img style={{width: "60px"}} src={props.logo} alt=""/>
        </button>
      </div>

      <div className="col d-flex justify-content-center">
        <button className="iconos">
          <img style={{width: "60px"}} src={props.logo2} alt=""/>
        </button>
      </div>

      <div className="col d-flex justify-content-center">
        <button className="iconos">
          <img style={{width: "60px"}} src={props.logo3} alt=""/>
        </button>
      </div>
      <div className="col"></div>
    </div>




  </footer>
        </div>
    )
}

export default componente8