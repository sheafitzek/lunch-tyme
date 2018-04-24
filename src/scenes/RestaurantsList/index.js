// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// components
import Header from '../../components/Header';
import Loading from 'react-loading';
import RestaurantListItem from './RestaurantsListItem';
import RestaurantDetails from '../RestaurantDetails';

export class RestaurantsList extends Component {
	constructor() {
		super();

		this.state = {
			isDetailOpen      : false,
			restaurants       : [],
			currentRestaurant : {},
		};
	}

	// lifecycle
	shouldComponentUpdate() {
		const { location } = this.props;
		const { isDetailOpen } = this.state;

		if (location.pathname === `/` && isDetailOpen === true) {
			this.setState({
				isDetailOpen : false,
			});

			this.hideDetails();
		}

		if (location.pathname !== `/` && isDetailOpen === false) {
			this.setState({
				isDetailOpen : true,
			});
		}

		return true;
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.restaurants === prevState.restaurants) {
			return null;
		}

		return {
			restaurants : nextProps.restaurants,
		};
	}

	// methods
	showDetails = (restaurant) => {
		this.setState(() => {
			return {
				isDetailOpen      : true,
				currentRestaurant : restaurant,
			};
		});
	};

	hideDetails = () => {
		this.setState(() => {
			return {
				isDetailOpen      : false,
				currentRestaurant : {},
			};
		});
	};

	render() {
		const { isDetailOpen, restaurants, currentRestaurant } = this.state;
		const { history } = this.props;

		if (!restaurants.length) {
			return (
				<Div className="Loading">
					<Loading
						className="spinner"
						type="spokes"
						color="#2a2a2a"
						height="100px"
						width="100px"
					/>
				</Div>
			);
		}

		return (
			<Div className="RestaurantsList">
				<Header
					className="Header"
					isDetailOpen={isDetailOpen}
					hideDetails={this.hideDetails}
					history={history}
				/>

				<ul className="list">
					{restaurants.map((item) => {
						return (
							<RestaurantListItem
								classname="RestaurantsList"
								key={item.location.lat}
								currentRestaurant={item}
								showDetails={this.showDetails}
							/>
						);
					})}
				</ul>

				<RestaurantDetails
					isDetailOpen={isDetailOpen}
					currentRestaurant={currentRestaurant}
				/>
			</Div>
		);
	}
}

// types
RestaurantsList.PropTypes = {
	location : PropTypes.object,
	history  : PropTypes.object,
};

RestaurantsList.contextTypes = {
	router : PropTypes.object,
};

export default RestaurantsList;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	div.spinner {
		margin: auto;
	}

	& > .Header {
		position: fixed;
	}

	& > .list {
		background: ${({ theme }) => theme.color.black};
		list-style-type: none;
		padding: 0;
		margin: ${({ theme }) => theme.dimensions.mainHeader} 0 0 0;
	}
`;
