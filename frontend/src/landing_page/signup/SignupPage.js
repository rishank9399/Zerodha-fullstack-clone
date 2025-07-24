import React from 'react';
import Hero from './Hero';
import InvestmentOptions from './InvestmentOptions';
import Steps from './Steps';
import Benefits from './Benefits';
import Types from './Types';
import FAQs from './FAQs';
import OpenAccount from '../OpenAccount';

function SignupPage() {
    return ( 
        <>
            <Hero />
            <InvestmentOptions />
            <Steps />
            <Benefits />
            <Types />
            <FAQs />
            <OpenAccount />
        </>
     );
}

export default SignupPage;