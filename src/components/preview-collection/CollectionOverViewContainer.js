import CollectionOverView from './CollectionOverview';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
	const { loading } = state.shop;
	return {
		isLoading: loading,
	};
};

const CollectionOverViewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverView);
export default CollectionOverViewContainer;
