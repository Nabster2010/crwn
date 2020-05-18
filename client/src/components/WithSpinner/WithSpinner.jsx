import React from 'react';

import Spinner from './Spinner';

const WithSpinner = (WrapedComponent) => ({ isLoading, ...props }) => {
	return isLoading ? <Spinner /> : <WrapedComponent {...props} />;
};

export default WithSpinner;
