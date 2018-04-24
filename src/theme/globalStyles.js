import { injectGlobal } from 'styled-components';
import theme from './index.js';

// styles
injectGlobal`
	*, *:before, *:after {
		box-sizing: border-box;
	}

	html {
		display: flex;
		min-height: 100%;
	}

	body {
		display: flex;
		flex: 1;

		margin: 0;
		background: ${theme.black};
	}

	#root {
		display: flex;
		flex: 1;
	}
`;
