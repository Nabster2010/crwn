import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShopData } from '../../redux/shopSlice';
import { Route, useRouteMatch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from '../../components/WithSpinner/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
const CollectionPageContainer = lazy(() =>
	import('../collections/CollectionPageContainer')
);
const CollectionOverViewContainer = lazy(() =>
	import('../../components/preview-collection/CollectionOverViewContainer')
);

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setShopData());
	}, [dispatch]);
	let match = useRouteMatch();

	return (
		<div>
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route
						exact
						path={match.path}
						component={CollectionOverViewContainer}
					/>
					<Route
						exact
						path={`${match.path}/:id`}
						component={CollectionPageContainer}
					/>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default Shop;
