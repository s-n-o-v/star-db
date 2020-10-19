import React from 'react';
import ItemDetails, { Record } from "../item-details/item-details"; 
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="crew" label="Crew" />
        </ItemDetails>
    );
};

const mapProps = (swapiService) => {
    return {
        info: 'StarshipDetails',
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(StarshipDetails, mapProps);
