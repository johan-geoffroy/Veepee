import React, { Component } from 'react';

//import icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
//import data
import destinations from '../api/destinations';

//import Componets
import Rating from './Rating';




class CardVoyage extends Component {

    constructor(props){
        super(props);

        
        this.viewDatas = this.viewDatas.bind(this);

    }


    viewDatas(datas,getNamecountry){

        const allTravelDatas = datas.destinations;
        const datasArray = [];
        let filterArray = [];
        let nameCountry = getNamecountry;


        allTravelDatas.forEach(elements => {
            datasArray.push(elements);
        });


        if(nameCountry === 'destinations'){

            return datasArray;

        } else {

            datasArray.filter((element) => {

                if(element.country === nameCountry){
                    
                    filterArray.push(element);
                }
            });

            return filterArray;
        }

    }


    render() {

        let getNameCountryFilter = this.props.getNameCountryFilter;
        let classDefault = '';
        const datas = destinations;
        const getAllDatas = this.viewDatas(datas,getNameCountryFilter);



        if(getNameCountryFilter !== 'destinations'){

            classDefault = 'wrapper';
        }
        

        //map datas

        const listDatas = getAllDatas.map((listData) => {

            const classNameTag = listData.tags[0].classname;
            const labelPremium = listData.tags[0].label;
            const classNameOption= listData.tags[1].classname;
            const labelOption = listData.tags[1].label;
            // const rating = listData.rating;

            return (
                <div className="card" key={listData.id}>
                    <div className="img-resort">
                        <img src={require('../assets/'+  listData.img_url)} alt="test" />
                        <p className="price">
                            {listData.upto}
                        </p>
                    </div>
                    <div className="footer-card">
                        <div className="description">
                            <h3>{listData.country} - <span className="media">{listData.place}</span></h3>
                            <p>{listData.label} <Rating /></p>
                            <span className={classNameTag}>{labelPremium}</span>
                            <span className={classNameOption}>{labelOption}</span>
                        </div>
                        <a href="/">
                            <div className="btn-view">
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </div>
                        </a>
                    </div>
                    {/* <Rating 
                        numberRating = {rating}
                    /> */}
                </div>
                
                );
        });


        return (
            <div className="list-resort">
                {listDatas}
                <div className={`start-line-icon  ${classDefault}`}></div>
                <div className={`end-line-icon ${classDefault}`}></div>
            </div>
        )
    }
}

export default CardVoyage;