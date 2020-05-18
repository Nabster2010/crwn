import React, { Component } from 'react';
import {
	ErrorImageContainer,
	ErrorImageText,
	ErrorImageOverlay,
} from './ErrorBoundayStyle';
export class ErrorBoundary extends Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}
	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}
	componentDidCatch(error, inf) {
		console.log(error);
	}
	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
					<ErrorImageText>Sorry This Page Is Broken!</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
