import React from 'react';
import './Checkout.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import { removeItem, itemDecrement } from '../../redux/cartSlice';
import { getTotal } from '../../utils';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const onToken = (token) => {
		console.log(token);
	};
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Prouct</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.length > 0 &&
				cartItems.map((item) => (
					<CheckoutItem
						key={item.id}
						item={item}
						removeItem={removeItem}
						itemDecrement={itemDecrement}
					/>
				))}

			<div className='total'>
				<span> Total : ${getTotal(cartItems)}</span>
			</div>
			<div className='payment'>
				<StripeCheckout
					token={onToken}
					stripeKey='pk_test_TRabdgVijSO058CzjAir9stS007bHyFbOZ'
					amount={getTotal(cartItems) * 100}
					currency='USD'
					name='Crown Store' // the pop-in header title
					description='Clothes' // the pop-in header subtitle
					image='https://sendeyo.com/up/d/f3eb2117da'
					billingAddress
					shippingAddress
					panelLabel='Pay Now'
				/>
			</div>
		</div>
	);
};

export default Checkout;
