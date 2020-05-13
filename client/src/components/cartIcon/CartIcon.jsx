import React from 'react';
import {
	CartIconStyles,
	ItemCountStyles,
	ShoppingIconStyles,
} from './CartIconStyles';
import { toggleCartHidden } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getQuantity } from '../../utils';

const CartIcon = () => {
	const { cartItems } = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	return (
		<CartIconStyles onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIconStyles />
			<ItemCountStyles>{getQuantity(cartItems)}</ItemCountStyles>
		</CartIconStyles>
	);
};

export default CartIcon;
