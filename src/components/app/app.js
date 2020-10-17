import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
 
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
// import PeoplePage from '../people-page/people-page';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        console.log('toggle');
        this.setState((state) => {
            return {
                showRandomPlanet: !this.state.showRandomPlanet
            }
        });
    }

    render() {

        const planet = this.state.showRandomPlanet ?
          <RandomPlanet/> :
          null;
    
   
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={5} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

