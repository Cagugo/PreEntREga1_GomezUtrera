import React, { Component } from "react";
import "./App.css";


// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import img1 from "./components/media/cardUno.jpg";
import img2 from "./components/media/cardDos.jpg";
import img3 from "./components/media/cardTres.jpg";
import img4 from "./components/media/cardCuatro.jpg";
import Greeting from "./components/Greeting/Greeting";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          title="Mexican Fusion Food & Lounge Bar"
          subTitle="Cocina Mexicana fusión con sabores latinos"
        />
        <div className="UserSection">
          <CardUser
            name="Chuleta al Nogal"
            date="Plato estrella desde el 2019"
            description="Una rica chuleta de cerdo Premium, ahogada a la parrilla con madera de Nogal"
            img={img1}
            backgroundColor="green"
          />
          <CardUser
            name="Tacos Villa Frida"
            date="Plato insignia de la casa desde el 2020"
            description="Se trata de unos ricos tacos de degustación con un tour de sabores y especias latinas"
            img={img2}
            backgroundColor="green"
          />
          <CardUser
            name="Tostada al Pastor"
            date="Plato de temporada desde el 2021 y quedo como plato de la casa"
            description="Se trata de una tortilla de maíz frita en aceite de maní en forma de taco, con carne maserada por 72 horas con nuestro achiote tradicional y rehogada en madera de abeto"
            img={img3}
            backgroundColor="green"
          />
          <CardUser 
           backgroundColor="green" 
           name="Entrada del Mar Caribe"
           date="Plato nuevo desde el 2023"
           description="Este plato es un homenaje al Mar y recauda lo mejor del caribe tanto de su pesca como de las especias Mexicanas"
          img={img4}>
          </CardUser>
        </div>
         <Greeting/>
      </div>
    );
  }
}

export default App;
