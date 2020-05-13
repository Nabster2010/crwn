import React from 'react';
import { useParams } from 'react-router-dom';
import './CollectionPage.scss';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
const CollectionPage = () => {
	const { id } = useParams();

	const { collections } = useSelector((state) => state.shop);
	const [{ title, items }] = collections.filter(
		(collection) => collection.routeName.toLowerCase() === id.toLowerCase()
	);

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
