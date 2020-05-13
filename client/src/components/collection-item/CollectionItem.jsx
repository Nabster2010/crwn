import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './collectionItem.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${item.imageUrl})` }}
			></div>
			<div className='collection-footer'>
				<span className='name'>{item.name}</span>
				<span className='price'>${item.price}</span>
			</div>

			<CustomButton inverted onClick={() => dispatch(addToCart(item))}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
