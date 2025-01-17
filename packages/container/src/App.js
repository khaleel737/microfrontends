import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/header';

export default () => {
<<<<<<< HEAD
    return <div>
        <h1>Howdy There!!!!!!!!!!!!!</h1>
        <hr />
        <MarketingApp />
    </div>
=======
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    )
>>>>>>> b86b2f0 (added header)
};