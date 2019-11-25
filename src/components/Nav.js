import React, { Component } from "react";
import {weatherUrl, homeUrl} from "../constants";

class Nav extends Component {
    render = () => (
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="navbar-brand-bg">
                <a className="navbar-brand" href={homeUrl}>MySuperWeatherApp</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                    aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href={homeUrl}>Home<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href={weatherUrl}>Weather</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;