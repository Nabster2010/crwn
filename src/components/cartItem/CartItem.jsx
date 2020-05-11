import React from 'react';

import {
	CartItemContainer,
	CartItemImg,
	ItemDetailsStyles,
	NameStyles,
} from './CartItemStyles';
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
	return (
		<CartItemContainer>
			<CartItemImg src={imageUrl} alt='' />
			<ItemDetailsStyles className='item-detail'>
				<NameStyles>{name}</NameStyles>
				<span className='item-price'>
					{quantity}*${price}
				</span>
			</ItemDetailsStyles>
		</CartItemContainer>
	);
};

export default CartItem;
