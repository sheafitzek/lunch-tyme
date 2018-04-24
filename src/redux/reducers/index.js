import { combineReducers } from 'redux';

import RestaurantsReducer from './reducer-restaurants';

const rootReducer = combineReducers({
	restaurants : RestaurantsReducer,
});

export default rootReducer;
