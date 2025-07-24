import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                
                
                <div className='col-4 p-2 mt-4'>
                    <h1 className='mt-3 fs-2'>{productName}</h1>
                    <p className='mt-4 lh-lg fs-6'>{productDescription}</p>
                    <div className='pb-4'>
                        <a href={learnMore} className='me-3' style={{textDecoration: "none"}}>Learn more  <i class="fa-solid fa-right-long"></i></a>
                    </div>
                    
                </div>
                <div className='col-1'></div>
                <div className='col-7 text-center'>
                    <img src={imageURL} alt='Product_image' />
                </div>
            </div>
        </div>
     );
}

export default RightSection;