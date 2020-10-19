import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mappedProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mappedProps(swapiService);
                        return (<Wrapped {...props} {...serviceProps} />);
                    }
                }
            </SwapiServiceConsumer>
        )
    };
};

export default withSwapiService;