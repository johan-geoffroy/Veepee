import React from 'react';

//import components
import Slider from '../components/Slider';

const Header = () => {

    return(
        <header className="top-header">
            <div className="page-title">
                <h1>découvrez les offres du moment</h1>
                <h2>vol + hôtel jusqu' à -70%</h2>
            </div>
            <section className="slider">
                <Slider />
            </section>
        </header>
    );
}

export default Header;