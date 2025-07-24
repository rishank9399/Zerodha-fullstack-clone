import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8'>
                    <a href="" style={{textDecoration: "none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul className='text-muted pt-2' style={{fontSize: "12px", textAlign: "left", lineHeight: "2.5"}}> 
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account(non-PIS), 0.5% or ₹100 per excuted order for equity(whichever is low).</li>
                        <li>For NRI account(PIS), 0.5% or ₹200 per excuted order for equity(whichever is low).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per excuted order insted of ₹20 per excuted order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href="" style={{textDecoration: "none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;