import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconStyles = styled.div`
	position: relative;
	width: 45px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
export const ShoppingIconStyles = styled(ShoppingIcon)`
	width: 24px;
	height: 24px;
`;
export const ItemCountStyles = styled.span`
	position: absolute;
	bottom: 12px;
	font-size: 10px;
	font-weight: bold;
`;
