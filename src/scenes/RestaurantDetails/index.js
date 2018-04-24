// react
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// components
import GoogleMap from './GoogleMap';
import DetailsHeader from './DetailsHeader';
import Details from './Details';

export class RestaurantDetails extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			currentRestaurant : {},
		};
	}

	// lifecycle
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.currentRestaurant === prevState.currentRestaurant) {
			return null;
		}

		return {
			currentRestaurant : nextProps.currentRestaurant,
		};
	}

	render() {
		const { currentRestaurant } = this.state;
		const open = this.props.isDetailOpen ? `open` : ``;

		return (
			<Div className={`RestaurantDetails ${open}`}>
				{Object.keys(currentRestaurant).length ? (
					<GoogleMap currentRestaurant={currentRestaurant} />
				) : (
					<div className="map" />
				)}
				<DetailsHeader currentRestaurant={currentRestaurant} />
				<Details
					currentRestaurant={currentRestaurant}
					isDetailOpen={this.props.isDetailOpen}
				/>
			</Div>
		);
	}
}

// types
RestaurantDetails.propTypes = {
	isDetailOpen : PropTypes.bool,
};

RestaurantDetails.defaultProps = {
	isDetailOpen : false,
};

export default RestaurantDetails;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;

	position: fixed;
	top: ${({ theme }) => theme.dimensions.mainHeader};
	width: 100%;
	height: 100vh;
	background: ${({ theme }) => theme.color.white};
	opacity: 0;

	transform: translateX(-100%);
	transition: transform 375ms cubic-bezier(0.600, 0.040, 0.980, 0.335),
		opacity 1000ms;

	&.open {
		transform: translateX(0);
		opacity: 1;
	}

	& > .map {
		height: ${({ theme }) => theme.dimensions.map};

		.gm-style {
			div div div div div {
				div {
					div:nth-child(3) div:nth-child(-n + 2) div:nth-child(1) {
						/* infoWindow arrow */
						background-color: #3c61ad !important;
						border: 2px solid
							${({ theme }) => theme.color.lightGreen};
					}

					/* infoWindow */
					div:nth-child(4) {
						background-color: #3c61ad !important;
						border: 2px solid
							${({ theme }) => theme.color.lightGreen};
					}
				}
			}

			div:nth-child(1)
				div:nth-child(3)
				div:nth-child(2)
				div:nth-child(4)
				div {
				.gm-style-iw {
					/* infoWindow content */
					div,
					a {
						color: ${({ theme }) => theme.color.lightGreen};
						background-color: #3c61ad;
					}

					div {
						font-family: ${({ theme }) => theme.font.header};
						text-shadow: 2px 2px 3px
							${({ theme }) => theme.color.black};
					}

					a {
						font-family: ${({ theme }) => theme.font.text};
						text-shadow: none;
						text-decoration: none;

						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
`;
