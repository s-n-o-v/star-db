import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';

import './app.css';
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedPerson: 5
    };

    toggleRandomPlanet = () => {
        console.log('toggle');
        this.setState((state) => {
            return {
                showRandomPlanet: !this.state.showRandomPlanet
            }
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
                />
        );
        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}
                />
        );

        return (
            <div>
                <Header />

                <Row 
                    left={personDetails}
                    right={starshipDetails}
                    />

                {/* { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button> 

                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onPersonSelected} 
                            getData={this.swapiService.getAllPlanets}
                            renderItem={ (item) => (
                                <span><strong>{item.name}</strong> (D = {item.diameter})</span>
                            ) }
                            />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={this.state.selectedPerson} />
                    </div>
                </div> */}

            </div>
        );
    }
}

