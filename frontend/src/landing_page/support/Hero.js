import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id='Support_hero'>
            <div className='container p-5 pt-1'>
                <div className='row p-5'>
                    <div className='d-flex justify-content-between'>
                        <h3 className='fs-5 fw-medium'>Support Portal</h3>
                        <a href='' style={{color: "white"}}>Track tickets</a>
                    </div>
                    <div className='col-md-7 mt-5'>
                        <h4 className='fs-4 fw-normal mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                        <input type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected... ' className='p-3' style={{width: "100%", border: "none", borderRadius: "3px"}}/>
                        <div className='row'>
                            <a href='#' className='col-4 mt-3' style={{color: "white"}}>Track account opening</a>
                            <a href='#' className='col-4 mt-3' style={{color: "white"}}>Track segment activation</a>
                            <a href='#' className='col-4 mt-3' style={{color: "white"}}>Intraday margins</a>
                            <a href='#' className='col-4 mt-3' style={{color: "white"}}>Kite user manual</a>
                        </div>
                        
                    </div>
                    <div className='col-md-5 mt-5 p-3 pt-5'>
                        <h4 className='fs-5'>Featured</h4>
                        <div className='ps-4'>
                            1. <a href='' style={{color: "white", lineHeight: "3"}}>BSE StAR mutual fund platform downtime</a><br />
                            2. <a href='' style={{color: "white", lineHeight: "3"}}>Offer for sale (OFS) – May 2025</a>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
     );
}

export default Hero;