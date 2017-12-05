/* REACT */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadTestPage } from '../actions';

class TestPage extends Component {
    componentDidMount() {
        this.props.loadTestPage();
        console.log("tt",this.props)
    }
    
    render() {
        return (   
            <h1>TestPage { this.props.tests } </h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        tests: state.tests.data
    }
}

function mapToDispatchProps(dispatch){
    return bindActionCreators({loadTestPage:loadTestPage},dispatch)
}

export default connect(mapStateToProps,mapToDispatchProps)(TestPage);