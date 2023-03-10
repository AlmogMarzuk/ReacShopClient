import React from "react";
import { Link } from 'react-router-dom';



function Card({ items, handleClick, toggleModal }) {
    const { description, title, price, url } = items;

    return (
        <div className='card'>
            <img src={url} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <h5 className='card-price'>Price: {price}$</h5>
                <p className='card-text'><h6>{description}  is healthy and fresh on Rami Levi</h6>  </p>
                <div onClick={() => toggleModal(true)}>
                    <Link className='btn btn-primary' onClick={() => handleClick(items)}>
                        Add to cart
                    </Link>

                </div>
            </div>
        </div >
    );
}

export default Card;