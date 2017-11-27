const testState = {
    testData: []
}

export default (state = testState, action = {}) => {
    switch (action.type) {
        case 'FETCH_TESTDATA':
            return {
                ...state,
                testData: action.payload
            }
            defualt:
                return state;
    }
}