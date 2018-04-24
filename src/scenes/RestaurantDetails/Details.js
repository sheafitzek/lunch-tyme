// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// libs
import t from 'typy';

export const Details = ({ currentRestaurant, isDetailOpen }) => {
	const closed = isDetailOpen ? `` : `closed`;

	return (
		<Div className={`Details ${closed}`}>
			<div className="address">
				<p className="street">
					{t(currentRestaurant.location, `address`).isDefined ? (
						currentRestaurant.location.address
					) : (
						`No Address on File`
					)}
				</p>
				<p className="city">
					{t(currentRestaurant.location, `city`).isDefined ? (
						currentRestaurant.location.city
					) : (
						``
					)}
					{` `}
					{t(currentRestaurant, `location.state`).isDefined ? (
						currentRestaurant.location.state
					) : (
						``
					)}
					{` `}
					{t(currentRestaurant, `location.postalCode`).isDefined ? (
						currentRestaurant.location.postalCode
					) : (
						``
					)}
				</p>
			</div>
			<p className="phone">
				{t(currentRestaurant, `contact.formattedPhone`).isDefined ? (
					currentRestaurant.contact.formattedPhone
				) : (
					`No Phone on File`
				)}
			</p>
			<p className="twitter">
				{t(currentRestaurant, `contact.twitter`).isDefined ? (
					`@${currentRestaurant.contact.twitter}`
				) : (
					`No Twitter on File`
				)}
			</p>
		</Div>
	);
};

// types
Details.propTypes = {
	currentRestaurant : PropTypes.object.isRequired,
	isDetailOpen      : PropTypes.bool,
};

Details.defaultProps = {
	currentRestaurantContact : {},
	isDetailOpen             : false,
};

export default Details;

// styles
const Div = styled.div`
	flex: 1;

	font-family: ${({ theme }) => theme.font.text};
	font-size: ${({ theme }) => theme.fontSize.detailText};
	color: ${({ theme }) => theme.color.black};
	background-color: ${({ theme }) => theme.color.white};

	transition: color 0ms;

	&.closed {
		color: ${({ theme }) => theme.color.white};
	}

	& .address {
		margin: 16px 0 0 12px;

		& p.street {
			margin: 0;
		}

		& p.city {
			margin: 2px 0 0 0;
		}
	}

	& p.phone,
	p.twitter {
		margin: 26px 0 0 12px;
	}
`;
