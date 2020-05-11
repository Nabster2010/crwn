import React, { useEffect, useState } from 'react';
import CollectionPage from '../collections/CollectionPage';
import CollectionOverview from '../../components/preview-collection/CollectionOverview';
import { useDispatch } from 'react-redux';
import { setShopData } from '../../redux/shopSlice';
import { Route, useRouteMatch } from 'react-router-dom';
import { getref } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = () => {
	const [isloading, setIsloading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		const colRef = getref('collections');
		colRef.onSnapshot(
			(snap) => {
				if (!snap.empty) {
					let collections = snap.docs.map((doc) => ({
						id: doc.id,
						routeName: doc.data().title.toLowerCase(),
						...doc.data(),
					}));
					dispatch(setShopData(collections));
					setIsloading(false);
				}
			},
			(err) => {
				console.log(`Encountered error: ${err}`);
			}
		);
	}, [dispatch]);
	let match = useRouteMatch();
	return (
		<div>
			<Route
				exact
				path={match.path}
				render={(props) => (
					<CollectionOverViewWithSpinner isLoading={isloading} {...props} />
				)}
			/>
			<Route
				exact
				path={`${match.path}/:id`}
				render={(props) => (
					<CollectionPageWithSpinner isLoading={isloading} {...props} />
				)}
			/>
		</div>
	);
};

export default Shop;
