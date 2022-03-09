import { combineReducers } from 'redux'
import photoReducer from './photoReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
    photos: photoReducer,
    portfolios: portfolioReducer,
})

export default rootReducer;