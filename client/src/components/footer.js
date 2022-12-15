import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer(props) {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)=' }}>
            {new Date().getFullYear()} Store: {props.text} of Items
            </div>
        </MDBFooter>
    );
}

export default Footer;