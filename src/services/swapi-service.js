export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }
        return await res.json();
    };
    
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };
    getPerson = async (id) => {
        return this._transformPerson(await this.getResource(`/people/${id}/`));
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet = async (id) => {
        return this._transformPlanet(await this.getResource(`/planets/${id}/`));
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };
    getStarship = async (id) => {
        return this._transformStarship(await this.getResource(`/starships/${id}/`));
    };
    
    getPersonImage = ( {id} ) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }
    getPlanetImage = ( {id} ) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }
    getStarshipImage = ( {id} ) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

    _extractId(item) {
        const idRX = /\/(\d+)\/$/;
        return item.url.match(idRX)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        };
    }
    _transformStarship = (ship) => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.costInCredits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity
        };
    }

}
