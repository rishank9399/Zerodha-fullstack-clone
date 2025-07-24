import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row text-center'>
                <h1>Charges</h1>
                <h5 className='mt-3' style={{color: "#9b9b9b"}}>List of all charges and taxes</h5>
            </div>
            <div className='row p-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg' />
                    <h3>Free equity delivery</h3>
                    <p style={{color: "#666666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p style={{color: "#666666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg' />
                    <h3>Free direct MF</h3>
                    <p style={{color: "#666666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            

        </div>
     );
}

export default Hero;