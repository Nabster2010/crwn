import React from 'react';
import CustomButton from '../customButton/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cartSlice';
import {
	CardDropDownContainer,
	EmptyMessageStyle,
	CardItemStyles,
} from './CartDropDownStyles';
const CartDropDown = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<CardDropDownContainer>
			<CardItemStyles>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessageStyle>Your cart is Empty</EmptyMessageStyle>
				)}
			</CardItemStyles>
			<CustomButton
				onClick={() => {
					dispatch(toggleCartHidden());
					history.push('/checkout');
				}}
			>
				go to checkout
			</CustomButton>
		</CardDropDownContainer>
	);
};

export default CartDropDown;
