import React from 'react'
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Main from './components/Main';

const componentRoutes = {

}

const Routes = () => {
    return(
        <Router history={hashHistory}>
            <Route path="/" component={Main}>

            </Route>
        </Router>
    )
};

export default Routes;