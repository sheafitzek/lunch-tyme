import { FETCH_RESTAURANTS } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			if (action.payload.status === 200) {
				return action.payload.data.restaurants;
			}

			break;

		default:
			return state;
	}
}
