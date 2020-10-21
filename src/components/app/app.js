import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
 
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet/>

                            <Route path="/" exact render={() => <h2>Welcome to StarDB!</h2>} />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} exact />
                            <Route path="/starships/:id" 
                                    render={ 
                                        ({ match }) => {
                                            return <StarshipDetails itemId={ match.params.id } />;
                                        } 
                                    }
                                     />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

