import React from 'react';
import './App.css';
import PropTypes from "prop-types";

function Header(props) {
    return (
        <header>
            <h1>{props.name}&apos;s Kitchen</h1>
        </header>
    );
}

function Main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food around</p>
            <img src="https://c0.wallpaperflare.com/preview/511/334/494/cutlery-dining-room-flatware-fork.jpg" height={200} alt="A plate with a handkerchief on top of it and on the side a fork and a knife."></img> 
            <ul style={ { textAlign: "left" }}>
                {props.dishes.map((dish) => (
                <li key={dish.id}>{dish.title}</li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>Copyrights {props.year}</p>
        </footer>
    );
}

const dishes = [
    "Macaroni", 
    "Rice and Chicken",
    "Salmon"
];

const dishObjects = dishes.map((dish, i ) => ({ id: i, title: dish }));

function App() {
    return ( 
        <div className="App">
            <Header name="John" />
            <Main adjective="amazing" dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} /> 
        </div>
    );
    
}
Header.propTypes = {
    name: PropTypes.any,
};

Main.propTypes = {
    adjective: PropTypes.string,
    dishes: PropTypes.array,
    dishObjects: PropTypes.object,
};

Footer.propTypes = {
    year: PropTypes.any,
};

export default App;