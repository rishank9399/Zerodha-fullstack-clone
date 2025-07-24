import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-7 text-center'>
                    <img src={imageURL} alt='Product_image' />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-2 mt-4'>
                    <h1 className='mt-3 fs-2'>{productName}</h1>
                    <p className='mt-4 lh-lg fs-6'>{productDescription}</p>
                    <div className='pb-4'>
                        <a href={tryDemo} className='me-3' style={{textDecoration: "none"}}>Try demo <i class="fa-solid fa-right-long"></i></a>
                        <a href={learnMore} className='ms-5' style={{textDecoration: "none"}}>Learn more <i class="fa-solid fa-right-long"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='GooglePlay image' /></a>
                        <a href={appStore} className='ms-3'><img src='media/images/appStoreBadge.svg' alt='AppStore image'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;