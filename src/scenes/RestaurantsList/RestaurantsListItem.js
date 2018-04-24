// react
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// libs
import slugify from 'slugify';

// images
import overlay from '../../assets/images/cellGradientBackground@2x.png';

// components
import Loading from 'react-loading';

export class RestaurantListItem extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			currentRestaurant : {},
		};
	}

	handleClick = () => {
		const { currentRestaurant } = this.props;

		this.props.showDetails(currentRestaurant);

		this.context.router.history.push(
			`/${slugify(this.props.currentRestaurant.name, { lower: true })}`
		);
	};

	render() {
		if (!this.props.currentRestaurant === {}) {
			return (
				<Div className="Loading">
					<Loading
						className="spinner"
						type="spokes"
						color="#000000"
						height="50px"
						width="50px"
					/>
				</Div>
			);
		}

		const { currentRestaurant } = this.props;

		return (
			<Div
				className="RestaurantListItem"
				onClick={this.handleClick}
				currentRestaurant={currentRestaurant}
			>
				<h1>{currentRestaurant.name}</h1>
				<p>{currentRestaurant.category}</p>
			</Div>
		);
	}
}

// types
RestaurantListItem.propTypes = {
	currentRestaurant : PropTypes.object.isRequired,
	showDetails       : PropTypes.func.isRequired,
};

RestaurantListItem.contextTypes = {
	router : PropTypes.object,
};

export default RestaurantListItem;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	height: ${({ theme }) => theme.dimensions.listItem};
	cursor: pointer;

	background: url(${overlay}),
		url(${({ currentRestaurant }) => currentRestaurant.backgroundImageURL});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom center, center center;

	& > h1 {
		font-family: ${({ theme }) => theme.font.header};
		font-size: ${({ theme }) => theme.fontSize.detailHeader};
		font-weight: ${({ theme }) => theme.fontWeight.header};
		color: ${({ theme }) => theme.color.white};
	}

	& > p {
		font-family: ${({ theme }) => theme.font.text};
		font-size: ${({ theme }) => theme.fontSize.mainText};
		font-weight: ${({ theme }) => theme.fontWeight.text};
		color: ${({ theme }) => theme.color.white};
	}

	& > h1,
	& > p {
		margin: 0 0 6px 12px;
	}

	div.spinner {
		margin: auto;
	}

	@media (min-width: 768px) {
		width: 50%;
		float: left;
	}
`;
