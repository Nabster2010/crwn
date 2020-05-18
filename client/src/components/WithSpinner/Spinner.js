import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';
const Spinner = () => {
	return (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	);
};

export default Spinner;
