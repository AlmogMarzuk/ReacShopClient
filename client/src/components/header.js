import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Store } from '../Store.js';
import logo from '../cart.gif'
import {MDBContainer,MDBNavbar,MDBNavbarBrand} from 'mdb-react-ui-kit';

// Get Cart: from state:
function Header(props) {
    const { state } = useContext(Store);
    const { cart } = state;
    const [badge, setBadge] = useState(0);
    const fetchData = async () => {
        const { data } = await axios({
            method: 'GET',
            url: 'http://localhost:3001/cart',
        });
        return data;
    };
    fetchData();
    
    const check = cart.cartItems !== 0 ? cart.cartItems.length : 0;
    useEffect(() => {
        fetchData().then((cart) => {
            if (cart.length !== 0) {
                cart[0].cartItems.length === 0 ? setBadge(0) : setBadge(cart[0].cartItems.length);
            }
        });
    }, [check]);


    return (
        <MDBNavbar light bgColor='dark'>
            <MDBContainer>
                <MDBNavbarBrand>
                    <Link to='/'>
                        <img className='img-fluid'
                            src={props.logo}
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                    </Link>
                    <Link to='/cart' className='cart'>
                        <img className='img-fluid2'
                            src={logo}
                            height='100'
                            alt=''
                            loading='lazy'
                        />
                        <Badge className='badge' bg='danger'>{badge}</Badge>
                    </Link>
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar >
    );
}

export default Header;