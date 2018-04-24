// react
import React from 'react';

// styles
import styled from 'styled-components';

export const NoMatch = () => {
	return (
		<Div className="NoMatch">
			<p>You seem to be lost.</p>
			<h1>404</h1>
			<p>Go back and try again!</p>
		</Div>
	);
};

export default NoMatch;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;

	margin: auto;
	align-items: center;
`;
