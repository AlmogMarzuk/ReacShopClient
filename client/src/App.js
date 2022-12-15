import React from 'react';

// Add Router to App.js:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// Import for Footer and Header Components:

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import Cart from './components/Cart';
import logo from './logo.png';



// App:

const App = () => {
    return (
        <Router>
            <>
                <Header logo={logo} />

                <div className='flex-wrapper'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>Page Not Found</h1>} />
                    </Routes>


                    <Footer text='Shop' />
                </div>
            </>
        </Router>
    );
}

export default App;