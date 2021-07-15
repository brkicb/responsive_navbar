import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Gallery from './containers/Gallery';
import Services from './containers/Services';

import './sass/main.scss';

const App = () => (
    <Router>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/services' component={Services} />
        </Layout>
    </Router>
);

export default App;
