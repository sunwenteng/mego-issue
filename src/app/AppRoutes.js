import React from 'react';
import {
    Route,
    Redirect,
    IndexRoute,
} from 'react-router';

import Master from './components/Master';
import ProductInsert from './components/pages/ProductInsert';
import ProductQuery from './components/pages/ProductQuery';
import Home from './components/pages/Home';

const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="product">
            <Route path="insert" component={ProductInsert}/>
            <Route path="query" component={ProductQuery}/>
        </Route>
    </Route>
);

export default AppRoutes;
