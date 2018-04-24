// react
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../redux/actions/index';

// router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from 'react-router-dom';

// styles
import styled from 'styled-components';

// components
import Loading from 'react-loading';
import RestaurantsList from '../scenes/RestaurantsList';
import NoMatch from '../scenes/NoMatch';

const basename = window.location.origin.includes(`github.io`)
	? `/${window.location.pathname.split(`/`)[1]}`
	: ``;

export class App extends PureComponent {
	constructor(props) {
		super(props);

		this.props.fetchRestaurants();

		this.state = {
			restaurants       : [],
			currentRestaurant : {},
		};
	}

	// lifecycle
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.restaurants === prevState.restaurants) {
			return null;
		}

		return {
			restaurants : nextProps.restaurants,
		};
	}

	render() {
		if (!this.state.restaurants.length) {
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
			<Router basename={basename}>
				<Div className="App">
					<Switch>
						<Route
							path="/"
							exact
							render={() => (
								<RestaurantsList
									restaurants={this.props.restaurants}
									{...this.props}
								/>
							)}
						/>
						<Route
							path="/:resttaurant"
							exact
							render={() => (
								<RestaurantsList
									restaurants={this.props.restaurants}
									{...this.props}
								/>
							)}
						/>
						<Route component={NoMatch} />
					</Switch>
				</Div>
			</Router>
		);
	}
}

// types
App.propTypes = {
	fetchRestaurants : PropTypes.func.isRequired,
	restaurants      : PropTypes.array.isRequired,
};

// redux
function mapStateToProps({ restaurants }) {
	return { restaurants };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRestaurants }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// styles
const Div = styled.div`
	display: flex;

	width: 100%;

	div.spinner {
		margin: auto;
	}
`;
