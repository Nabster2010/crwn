import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    @media screen and (max-width: 800px) {
		padding: 10px;
	}
	font-family: 'open sans condensed';
	padding: 20px 60px;
}
a {
	text-decoration: none;
	color: black;
}
* {
	box-sizing: border-box;
}


`;
