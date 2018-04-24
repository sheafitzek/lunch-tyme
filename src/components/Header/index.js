// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// icons
import backArrow from '../../assets/images/back_arrow.png';
import mapIcon from '../../assets/images/icon_map@2x.png';

// components
import Title from './Title';
import Icon from './Icon';

export const Header = ({ isDetailOpen, hideDetails, history }) => {
	const hidden = isDetailOpen ? `` : `hidden`;

	return (
		<Div className="Header">
			<Icon
				className={`BackIcon ${hidden}`}
				imgSrc={backArrow}
				hideDetails={hideDetails}
				history={history}
			/>
			<Title className="HeaderTitle" name="Lunch Tyme" />
			<Icon className="MapIcon" imgSrc={mapIcon} />
		</Div>
	);
};

// types
Header.propTypes = {
	isDetailOpen : PropTypes.bool.isRequired,
	hideDetails  : PropTypes.func.isRequired,
	history      : PropTypes.object.isRequired,
};

export default Header;

// styles
const Div = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-between;
	align-items: flex-end;

	width: 100%;
	height: ${({ theme }) => theme.dimensions.mainHeader};
	background-color: ${({ theme }) => theme.color.lightGreen};
	text-align: center;

	& > .BackIcon {
		margin: 0 0 12px 12px;
		cursor: pointer;

		visibility: visible;
		transition: visibility 375ms cubic-bezier(0.600, 0.040, 0.980, 0.335);

		&.hidden {
			visibility: hidden;
			transition: visibility 375ms
				cubic-bezier(0.600, 0.040, 0.980, 0.335);
		}
	}

	& > .MapIcon {
		margin: 0 12px 12px 0;
	}
`;
