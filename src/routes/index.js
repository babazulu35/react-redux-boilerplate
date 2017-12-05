/* REACT */
import React, { Component } from 'react'

/* Routes */
import { Switch, Route } from 'react-router-dom';

/* Pages */
import TestPage from '../pages/test-page';

class Routes extends Component {

    render() {
        return [
            <Switch>
                <Route exact path='/' component={TestPage} />
            </Switch>
        ]
    }

}

export default Routes