// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

export const DetailsHeader = ({ currentRestaurant }) => {
	return (
		<Div className="DetailsHeader">
			<h1>{currentRestaurant.name || `No Restaurant Chosen`}</h1>
			<p>{currentRestaurant.category || `No Category`}</p>
		</Div>
	);
};

// types
DetailsHeader.propTypes = {
	currentRestaurant : PropTypes.object.isRequired,
};

export default DetailsHeader;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	height: ${({ theme }) => theme.dimensions.detailHeader};
	background-color: ${({ theme }) => theme.color.darkGreen};

	& > h1 {
		font-family: ${({ theme }) => theme.font.header};
		font-size: ${({ theme }) => theme.fontSize.detailHeader};
		font-weight: ${({ theme }) => theme.fontWeight.header};
		color: ${({ theme }) => theme.color.white};
		margin: 0 0 6px 12px;
	}

	& > p {
		font-family: ${({ theme }) => theme.font.text};
		font-size: ${({ theme }) => theme.fontSize.mainText};
		font-weight: ${({ theme }) => theme.fontWeight.text};
		color: ${({ theme }) => theme.color.white};
		margin: 0 0 0 12px;
	}
`;
