import React, { Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

//import data
// import destinations from '../api/destinations';
// import { icon } from '@fortawesome/fontawesome-svg-core';

class Rating extends Component {

    
    render(){

        const starIcon = <FontAwesomeIcon icon={faStar} />


        return(
            <span>{starIcon}</span>
        );
    }
    
}


export default Rating;