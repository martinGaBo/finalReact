import React from 'react';


function componente6(props) {
    return (
        <div>
            <div style={{backgroundColor: "#dddada"}} id="quienSoy"  className="row seccion">
                <a href="#nav">
                    <h1 className="titulo">
                        QUIÉN SOY
                    </h1>
                </a>

                <div className="row">
                    <div className="card p-2 mx-auto" style={{width: "20rem"}}>
                        <img src={props.persona} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title subtitulo">Martin Gaviria</h5>
                                <p>
                                    <a className="btn btn-primary ms-5" data-bs-toggle="collapse" href="#collapseExample" role="button"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        sobre mi
                                    </a>
                                    <button className="btn btn-primary ms-4" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="bi bi-x"></i>
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        Soy Martin Gaviria, tengo 18 años y estudio producción de multimedia donde empecé mi proyecto Habited con
                                        el
                                        que adquirí conocimientos y experiencia en programación, ilustración, modelado 3D, animación y más.
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="infoText">

                            <div className="subtitulo">
                                <h2>Justificación</h2>
                            </div>

                            <p className="parrafo">Siendo Colombia el país más biodiverso del mundo, se pensaría que las personas que la
                                habitan
                                conocen su biodivesidad y buscan cuidarla, es así que nos dimos en la tarea de tomar una muestra poblacional
                                a
                                la que se le hicieron preguntas dirigidas a identificar su conocimiento frente al tema, sin embargo nos
                                encontramos con la realidad de que existe gran porcentaje de desconocimiento frente al tema de
                                flora silvestre, su cuidado y protección. Gracias a que es poco trabajado desde la educación y poco
                                percibido
                                en la cotidianidad. </p>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="infoText">

                            <div className="subtitulo">
                                <h2>Objetivo</h2>
                            </div>

                            <p className="parrafo">Habited tiene como objetivo brindar información de forma didáctica sobre el cuidado y
                                protección de la flora silvestre teniendo como base el decreto de la ley 2811 del 74 código Nacional de
                                recursos naturales renovable y de protección al medio ambiente. Por ende también buscamos contribuir a la
                                concientizacion sobre frente al tema.</p>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default componente6

