import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from './CollectionPreview';
import './CollectionOverview.scss';
const CollectionOverview = () => {
	const { collections } = useSelector((state) => state.shop);
	return (
		<div className='collections-overview'>
			{collections.map((collection, indx) => (
				<CollectionPreview key={indx} collection={collection} />
			))}
		</div>
	);
};

export default CollectionOverview;
