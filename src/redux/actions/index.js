import axios from 'axios';

export const FETCH_RESTAURANTS = `FETCH_RESTAURANTS`;

export function fetchRestaurants() {
	const url = `https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/br-codingexams/restaurants.json`;
	const request = axios.get(url);

	return {
		type    : FETCH_RESTAURANTS,
		payload : request,
	};
}
