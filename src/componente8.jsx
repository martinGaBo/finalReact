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
        <a target='_blank' href="https://www.youtube.com/channel/UCOC5NZlUT5ED92g5cZclPFg">
        <button className="iconos">
          <img style={{width: "60px"}} src={props.logo} alt=""/>
        </button>
        </a>
      </div>

      <div className="col d-flex justify-content-center">
        <a target='_blank' href="https://instagram.com/proyecto_habited?igshid=MzRlODBiNWFlZA==">
          <button className="iconos">
          <img style={{width: "60px"}} src={props.logo2} alt=""/>
        </button>
        </a>
      </div>

      <div className="col d-flex justify-content-center">
        <a target='_blank' href="https://wa.me/573104613467">
          <button className="iconos">
          <img style={{width: "60px"}} src={props.logo3} alt=""/>
        </button>
        </a>
      </div>
      <div className="col"></div>
    </div>




  </footer>
        </div>
    )
}

export default componente8