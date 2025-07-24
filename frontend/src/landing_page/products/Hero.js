import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center pb-5' style={{borderBottom: "1px solid rgba(204, 204, 204, 0.5)"}}>
                <h1 className='fw-medium fs-1'>Zerodha Products</h1>
                <h2 className='fs-5 fw-normal p-2'>Sleek, modern, and intuitive trading platforms</h2>
                <p className='p-2 mb-5 pb-3'>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;