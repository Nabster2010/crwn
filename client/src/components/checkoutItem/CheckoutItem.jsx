import React from 'react';
import './CheckoutItem.scss';
import { useDispatch } from 'react-redux';
import { itemIncrement } from '../../redux/cartSlice';
const CheckoutItem = ({
	item: { name, imageUrl, quantity, price, id },
	removeItem,
	itemDecrement,
}) => {
	const dispatch = useDispatch();
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='' />
			</div>

			<span className='name'>{name}</span>

			<span className='quantity'>
				<div className='arrow' onClick={() => dispatch(itemDecrement(id))}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => dispatch(itemIncrement(id))}>
					&#10095;
				</div>
			</span>

			<span className='price'>${price}</span>

			<span className='remove-button' onClick={() => dispatch(removeItem(id))}>
				&#10005;
			</span>
		</div>
	);
};

export default CheckoutItem;
