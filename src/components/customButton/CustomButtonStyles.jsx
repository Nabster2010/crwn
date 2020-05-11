import styled, { css } from 'styled-components';

const GoogleStyles = css`
	background-color: #4285f4;
	color: white;
	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;
const InvertedStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;
	&:hover {
		background-color: black;
		border: none;
		color: white;
	}
`;
const ButtonStyles = css`
	background-color: black;
	border: none;
	color: white;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const getCustomStyles = (props) => {
	if (props.isGoogle) {
		return GoogleStyles;
	}
	return props.inverted ? InvertedStyles : ButtonStyles;
};

export const CustomButtonStyle = styled.button`
	min-width: 160px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 30px 0 30px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;
	${getCustomStyles}
`;
