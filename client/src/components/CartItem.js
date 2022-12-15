import React from "react";


function CartItem({ items }) {
    const { title,price,url,description ,quantity} = items;

    return (
        <div class="card">
            <div class="row">
                <div class="col-sm-4 col-md-8 col-lg-4">
                    <img src={url} className='card-img2' alt='...' />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-6">
                    <div className='card-body2'>
                        <h3 className='card-title'>{title}</h3>
                        <h3 className='card-price'>Price: ${price}</h3>
                        <h3>Quntity: {quantity}</h3>
                        <p className='card-text'><h6>{description}  is healthy and fresh on Rami Levi</h6>  </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

