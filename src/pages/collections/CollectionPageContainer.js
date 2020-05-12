import CollectionPage from './CollectionPage';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
	const { loading } = state.shop;

	return { isLoading: loading };
};

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
