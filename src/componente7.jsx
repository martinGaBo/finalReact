import React from 'react';



function componente7(props) {
    return (
        <>
            <div id="seccion5" style={{ backgroundColor: '#afe33537' }} className="row seccion">
                <a href="#nav">
                    <h1 id="producto" className="titulo">
                        PRODUCTO
                    </h1>
                </a>

                <div className="row">

                    <div className="col-lg-6 col-md-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={props.juego} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={props.juego2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={props.juego3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={props.juego4} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div id="juegop">
                            <h2 className="subtitulo">INFORMACIÓN DEL JUEGO</h2>
                            <p className="parrafo">El juego inicia cuando la diosa Gaia le otorga a Palmero, el antagonista, un don que le
                                enseñará a cuidar y conservar la flora silvestre. Palmero empieza a hacer uso de este don pero, Gaia le
                                ordena
                                que haga bien su trabajo; ante esto, el personaje se llena de ira y actúa en contra de la flora buscando
                                destruirla.
                                <br />
                                <br />
                                Tiempo después, el dios Zeus cita a Gaia en el Olimpo y le informa que ha recibido quejas de la gente en la
                                tierra, por daños en el ecosistema.
                                <br />
                                <br />
                                Gaia retorna al bosque triste y arrepentida, y es así como crea un personaje que luchará contra Palmero para
                                recuperar la flora silvestre y ser el nuevo héroe de la naturaleza.
                            </p>

                            <div id="botonj">
                                <button id="jugar">¡CLIC PARA JUGAR!</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default componente7