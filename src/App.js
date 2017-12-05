import React, { Component } from 'react'

/* Routes */
import { withRouter } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
    render(){
        return(
                <div>
                    <h1>Hello Semantic</h1>
                    <Routes/>
                </div>
        );
    }
}

export default withRouter(App);
