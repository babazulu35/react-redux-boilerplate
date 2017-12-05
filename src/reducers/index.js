import { combineReducers } from 'redux';
import { LOAD_TEST_PAGE } from '../actions';

function testPage(state = { tests: [] }, action) {

    switch (action.type) {
        case LOAD_TEST_PAGE:
            return {
                ...state,
                data: [...state.tests]
            }
    }
    return state;
}

export default combineReducers({ tests: testPage });