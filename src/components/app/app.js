import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
 
import Header from '../header';
import RandomPlanet from '../random-planet';
// import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';

export default class App extends Component {

    swapiService = new DummySwapiService();

    state = {
        showRandomPlanet: true
    };

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet/>
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

