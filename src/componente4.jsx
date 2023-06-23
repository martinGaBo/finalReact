import React from 'react';


function componente4(props) {
    return (
        <div>
            <div id="corporativo" className="row seccion">
                <a href="#nav">
                    <h1 className="titulo">
                        {props.titulo}
                    </h1>
                </a>

                <div>
                    <iframe className="scribd_iframe_embed" title="Manual Habited"
                        src="https://es.scribd.com/embeds/654564229/content?start_page=1&view_mode=slideshow&access_key=key-iY2Zyn0stJrhPHoM0Yzv"
                        data-auto-height="false" data-aspect-ratio="1.3645990922844176" scrolling="no" id="doc_28113" width="100%"
                        height="600" frameborder="0"></iframe>

<p
                        style={{
                            margin: '12px auto 6px auto',
                            fontFamily: 'Helvetica, Arial, Sans-serif',
                            fontStyle: 'normal',
                            fontVariant: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            lineHeight: 'normal',
                            fontSizeAdjust: 'none',
                            fontStretch: 'normal',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            display: 'block',
                        }}>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default componente4