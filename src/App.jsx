import React from 'react';
import './App.css'
import Componente1 from "./componente1.jsx";
import Componente2 from "./componente2.jsx";
import Componente3 from "./componente3.jsx";
import Componente4 from "./componente4.jsx";
import Componente5 from "./componente5.jsx";
import Componente6 from "./componente6.jsx";
import Componente7 from "./componente7.jsx";
import Componente8 from "./componente8.jsx";

function App() {

  return (
    <>
      <Componente1 logo="../public/img/logo_habited_sin_letras.png" />
      <Componente2 banner='../public/img/banner.png' />
      <Componente3 mision="Brindar información al público objetivo sobre el cuidado y uso correcto de la flora silvestre, a través de un sitio web que sirve como herramienta pedagógica, informativa y de capacitación." 
      vision= "Brindar información al público objetivo sobre el cuidado y uso correcto de la flora silvestre, a través de un sitio web que sirve como herramienta pedagógica, informativa y de capacitación."
      objetivo1= "1. Capacitar constantemente a los emprendimientos que trabajen con el tema de la flora silvestre, con el fin de evitar que incumplan la ley."
      objetivo2= "2. Orientar a los diferentes emprendimientos buscando que estos implementen a futuro un método de enseñanza adecuado, que les permita educar a otras personas."/>
      <Componente4 titulo="CORPORATIVO" />
      <Componente5 titulo="CONTEXTO INTERACTIVO" />
      <Componente6 persona="../public/img/martin.png" />
      <Componente7 teaser="./img/teaser_Habited.mp4" juego="./img/juego.png" juego2="./img/juego2.png" juego3="./img/juego3.png" juego4="./img/juego4.png" />
      <Componente8 logo="./img/youtube.png" logo2="./img/instagram.png" logo3="./img/whatsapp.png" />


    </>
  )
}

export default App

