import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';

const PageLayout = (props) => {


    return(
        <Fragment>
            <Header/>
            <main className="main-container" id="main">
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    )
}

export default PageLayout;