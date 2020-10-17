import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { 
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};
const renderName = ({name}) => <span>{name}</span>;
const listWithChildren = withChildFunction(ItemList, renderName);

const PersonList = withData(listWithChildren, getAllPeople);
const PlanetList = withData(listWithChildren, getAllPlanets);
const StarshipList = withData(listWithChildren, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
