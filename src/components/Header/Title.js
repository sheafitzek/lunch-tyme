// react
import React from 'react';
import PropTypes from 'prop-types';

// styes
import styled from 'styled-components';

export const Title = ({ name }) => {
	return <H1 className="Title">{name}</H1>;
};

// types
Title.propTypes = {
	name : PropTypes.string.isRequired,
};

export default Title;

// styles
const H1 = styled.h1`
	font-family: ${({ theme }) => theme.font.header};
	font-size: ${({ theme }) => theme.fontSize.mainHeader};
	font-weight: ${({ theme }) => theme.fontWeight.header};
	color: ${({ theme }) => theme.color.white};
	margin: 0 0 16px 0;
`;
