import React, { Component } from 'react';


import PageLayout from '../layouts/PageLayout';

import '../assets/fonts/SevenOneEight-Black.ttf';



//import components
import CardVoyage from '../components/CardVoyage';
import FilterCountry from '../components/FilterCountry';





class HomePage extends Component{

    constructor(props){
        super(props);

        this.state = {
            countryName: 'destinations',
        }

        this.callBackFunctionFiltercountry = this.callBackFunctionFilterCountry.bind(this);

    }

    callBackFunctionFilterCountry(nameCountrySelected){

        let getNameCountrySelected = nameCountrySelected;


        if(getNameCountrySelected === undefined ){

            
            return this.state.countryName;

        }else {

            this.setState({countryName: getNameCountrySelected,});
            return this.state.countryName;
        }
    }

    render(){

        return(
            <PageLayout>
                <section className="resort-container">
                    <div className="filter">
                        <FilterCountry
                            callBackFunctionFilter={(nameCountrySelected) => this.callBackFunctionFiltercountry(nameCountrySelected)}
                            classDefault = {this.state.classDefault}
                        />
                    </div>
                        <CardVoyage
                            getNameCountryFilter = {this.callBackFunctionFilterCountry()}
                            classDefault = {this.state.classDefault}
                        />                        
                </section>
                
                <section className="inscription">
                    <div className="header-section">
                        <div className="offer">
                            <p>comment bénéficier de l'offre ?</p>
                            <p>150€ de réduction* dès 1000€ d'achat</p>
                        </div>
                        <div className="code-promo-banner">
                            <h3>Déjà membre ?</h3>
                            <p>
                                votre code promo vous attent directement sur le site
                                <a href="/" className="link-promo"> en cliquant ici</a>
                            </p>
                        </div>
                    </div>
                    <div className="inscription-content">
                        <div>
                            <span>1</span>
                            <div>
                                <p>rejoignez<br/>
                                <span className="ins-details">emirates | the list</span></p>
                            </div>
                        </div>
                        <div>
                            <span>2</span>
                            <div>
                                <p>recevez par mail<br/>
                                <span className="ins-details">votre bon de 150€ offert</span><br/>
                                à utiliser dès 1000€ d'achat</p>
                            </div>
                        </div>
                        <div>
                            <span className="sharper">3</span>
                            <div>
                                <p>réservez votre séjour<br/>
                                <span className="ins-details">avant le 30 avril 2020</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-suscribe">
                    <a href="/" className="link-btn-suscribe">je m'inscrits</a>
                    </div>
                </section>
            </PageLayout>
        );
    }
}

export default HomePage;