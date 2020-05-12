import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShopData } from '../../redux/shopSlice';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionPageContainer from '../collections/CollectionPageContainer';
import CollectionOverViewContainer from '../../components/preview-collection/CollectionOverViewContainer';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setShopData());
	}, [dispatch]);
	let match = useRouteMatch();
	return (
		<div>
			<Route exact path={match.path} component={CollectionOverViewContainer} />
			<Route
				exact
				path={`${match.path}/:id`}
				component={CollectionPageContainer}
			/>
		</div>
	);
};

export default Shop;
