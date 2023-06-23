import React from 'react';


function componente3(props) {
    return (
        <div>
            <div style={{backgroundColor: "#b4dbb4"}} id="proyecto" className="row seccion">
                <a href="#nav">
                    <h1 className="titulo">
                        PROYECTO
                    </h1>
                </a>
                <div className="col-lg-6 col-md-12">

                    <div id="mision">
                        <h2 className="subtitulo">
                            MISIÓN
                        </h2>
                        <p className="parrafo">
                            {props.mision}
                        </p>
                    </div>

                    <div id="vision">
                        <h2 className="subtitulo">
                            VISIÓN
                        </h2>
                        <p className="parrafo">
                            {props.vision}
                        </p>
                    </div>

                    <div id="objetivos">
                        <h2 className="subtitulo">
                            OBJETIVOS ESPECIFICOS
                        </h2>
                        <p className="parrafo">
                            {props.objetivo1}
                        </p>

                        <p className="parrafo">
                            {props.objetivo2}
                        </p>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12">
                    <h2 className="subtitulo">PITCHBOOK</h2>

                    <div>
                        <p
                            style={{margin: "12px auto 6px auto", fontfamily: "Helvetica,Arial,Sans-serif", fontstyle: "normal", fontvariant: "normal", fontweight: "normal", fontsize: "14px", lineheight: "normal", fontsizeadjust: "none", fontstretch: "normal", xsystemfont: "none", display: "block",}}>
                        </p><iframe className="scribd_iframe_embed" title="Pitchbook Habited"
                            src="https://es.scribd.com/embeds/654564235/content?start_page=1&view_mode=slideshow&access_key=key-Qc2SVOPbO7Y6soWi0Zn7"
                            data-auto-height="false" data-aspect-ratio="1.7790927021696252" scrolling="no" id="doc_59862" width="100%"
                            height="600" frameborder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default componente3