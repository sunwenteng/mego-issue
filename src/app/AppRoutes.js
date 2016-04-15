import React from 'react';
import {
    Route,
    Redirect,
    IndexRoute,
} from 'react-router';

import Master from './components/Master';
import ProductBasic from './components/pages/ProductBasic';
import ProductQuery from './components/pages/ProductQuery';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="product">
            <Route path="insert" component={ProductBasic}/>
            <Route path="query" component={ProductQuery}/>
        </Route>
        <Route path="test" component={Test}/>
    </Route>
);

export default AppRoutes;
