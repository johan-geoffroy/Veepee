import React, { Component, Fragment } from 'react';

//import icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faSlidersH } from '@fortawesome/free-solid-svg-icons';


class FilterCountry extends Component{

    constructor(props){
        super(props);

        this.state = {

            classToggle: 'toggle-close',
            arrowActive: '',
            selectCountry: 'destionations'
        }


        this.clickFilterOpen = this.clickFilterOpen.bind(this);
        this.countrySelected = this.countrySelected.bind(this);
        

    }


    clickFilterOpen(){

        const isActive = 'toggle-open';

        if(this.state.classToggle === isActive ){

            this.setState({classToggle: 'toggle-close'});
            this.setState({arrowActive:''});

        } else {
            this.setState({classToggle: 'toggle-open'});
            this.setState({arrowActive:'arrow-active'});
        }
    }

    countrySelected(event){
        
        let nameCountrySelected = event;

        this.setState({selectCountry:nameCountrySelected,
                        arrowActive:'',
                        classToggle:'toggle-close'});


        this.props.callBackFunctionFilter(nameCountrySelected);
    }


    render(){



        const arrayCountry = ['destinations', 'Emirates Arabes Unis', 'Indonésie','Maldives',
                            'Maurice', 'Sri Lanka','Vietnam'];

        const listCountry = arrayCountry.map((countrys, index) => {

                return <li key={index} onClick={(event) =>this.countrySelected(countrys,event)}>{countrys}</li>;
        });

        return(
            <Fragment>
                <div className="filter-country">
                    <div className="container-select">
                        <span><FontAwesomeIcon icon={faSlidersH}/></span>
                        <div className="select">
                            <p>{this.state.selectCountry}</p>
                        </div>
                        <div className="btn-select" onClick={this.clickFilterOpen}>
                            <span className={this.state.arrowActive}><FontAwesomeIcon icon={faChevronDown}/></span>
                        </div>
                    </div>
                    <div className="choice-select">
                        <div className={`select-items ${ this.state.classToggle }`}>
                            <ul>
                                {listCountry}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default FilterCountry;


                //     <div className="title">
                //         <span><FontAwesomeIcon icon={faSlidersH}/></span>
                //         <p>destinations</p>
                //     </div>
                //     <div className="select">
                //         <FontAwesomeIcon icon={faChevronDown}/>
                //     </div>
                // </div>
                // <div className="lis-select-filter">
                //     <ul>
                //         <li>option 1</li>
                //         <li>option 2</li>
                //         <li>option 3</li>
                //     </ul>
                // </div>