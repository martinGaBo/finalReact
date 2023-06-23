import React from 'react';
import menuHamburguesa from '../public/img/Menu Hamburguesa.png';

function componente1 (props) {
    return (
        <div>
            <div id="nav" className="seccion py-4">
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <img style={{width: "140px", height: "124px"}} src={props.logo} alt=""/>

                            <img className="menu d-none" src={menuHamburguesa} alt=""/>
                            </div>
                            <div className="col">

                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid justify-content-end">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav justify-content-end  me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link" aria-current="page" href="#proyecto">PROYECTO</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#corporativo">CORPORATIVO</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#contexto">CONTEXTO</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#quienSoy">QUIÉN SOY</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#producto">PRODUCTO</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>

                            </div>
                    </div>
                </div>
            </div>
    )
}

export default componente1