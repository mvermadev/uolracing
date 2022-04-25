import React, {Fragment} from 'react';
import LandingNavbar from '../NavigationBars/LandingNavbar';
import LandingNavbarFooter from '../NavigationBars/LandingNavbarFooter'

const AboutUs = () => {
    return(
        <Fragment>
            <div>
                <LandingNavbar />
            </div>
            <div>
                <LandingNavbarFooter />
            </div>
        </Fragment>
    )
}


export default AboutUs;