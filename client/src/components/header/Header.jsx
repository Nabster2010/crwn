import React from 'react';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { signOut } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../cartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import {
	HeaderContainer,
	LogoContainer,
	OptionsLink,
	OptionLink,
	OptionDiv,
} from './HeaderStyles';
const Header = () => {
	const { cartIsHidden } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);

	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsLink>
				<OptionLink to='/shop'>Shop</OptionLink>
				<OptionLink to='/'>Contact</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => dispatch(signOut())}>SignOut</OptionDiv>
				) : (
					<OptionLink to='/signin'>SignIn</OptionLink>
				)}

				<CartIcon />
			</OptionsLink>
			{cartIsHidden && <CartDropDown />}
		</HeaderContainer>
	);
};

export default Header;
