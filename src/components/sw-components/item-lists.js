import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
 
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

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService(withData(listWithChildren), mapPersonToProps);
const PlanetList = withSwapiService(withData(listWithChildren), mapPlanetToProps);
const StarshipList = withSwapiService(withData(listWithChildren), mapStarshipToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};
