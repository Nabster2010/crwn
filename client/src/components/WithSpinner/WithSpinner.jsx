import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';

const WithSpinner = (WrapedComponent) => ({ isLoading, ...props }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrapedComponent {...props} />
	);
};

export default WithSpinner;
