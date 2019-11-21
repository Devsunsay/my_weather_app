import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import logo from './logo.png';
import Home from "./Home";
import Nav from "./Nav";
import WeatherPage from "./WeatherPage";
import {homeUrl, weatherUrl} from "./constants";

function App() {
  return (
      <div className="App container-fluid">
        <header className="App-header row">
          <Nav/>

          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <section className="container-fluid">
          <Router className="row">
            {/*Il faut aller des url les plus spécifiques aux plus générales, car le switch s'arrête dès le premier résultat correspondant en lisant l'url de gauche à droite.*/}
            <Switch>
              <Route exacte path={weatherUrl} component={WeatherPage} />
              <Route exacte path={homeUrl} component={Home} />
            </Switch>
          </Router>
        </section>
      </div>
  );
}

export default App;
