import React from 'react';


function componente6(props) {
    return (
        <div>
            <div style={{ backgroundColor: "#dddada" }} id="quienSoy" className="row seccion">
                <a href="#nav">
                    <h1 className="titulo">
                        QUIÉN SOY
                    </h1>
                </a>

                <div className="row">
                    <div className="card p-2 mx-auto" style={{ width: "20rem" }}>
                        <img src={props.persona} className="card-img-top" alt="..." />
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
                                    el que adquirí conocimientos y experiencia en programación, ilustración, modelado 3D, animación y más.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default componente6

