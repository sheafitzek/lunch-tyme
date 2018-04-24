// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

export const Icon = ({ className, imgSrc, hideDetails, history }) => {
	const handleClick = () => {
		hideDetails();
		history.replace(`/`);
	};

	return <Img className={className} src={imgSrc} onClick={handleClick} />;
};

// types
Icon.propTypes = {
	className   : PropTypes.string.isRequired,
	imgSrc      : PropTypes.string.isRequired,
	hideDetails : PropTypes.func,
	history     : PropTypes.object.isRequired,
};

Icon.defaultProps = {
	hideDetails : null,
};

export default Icon;

// styles
const Img = styled.img`
	width: 25px;
	height: 25px;
`;
