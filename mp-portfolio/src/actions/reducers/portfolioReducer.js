const initialState = {
    portfolios: []
}
const portfolioReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_PORTFOLIOS":
            return {
                ...state,
                portfolios: [...state.portfolios, action.payload]
            }
        case "GET_PORTFOLIOS":
            return {
                ...state,
                portfolios: [...state.portfolios, ...action.payload]
            }
        default:
            return state
    }
}

export default portfolioReducer;