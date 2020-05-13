import React from 'react';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/signIn-signUp/SignInSignUpPage';
import { useSelector } from 'react-redux';

import Checkout from './pages/checkout/Checkout';

const App = () => {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<BrowserRouter>
			<Header />

			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={Shop} />

				<Route exact path='/checkout' component={Checkout} />
				{currentUser ? (
					<Redirect to='/' />
				) : (
					<Route exact path='/signin' component={SignInSignUpPage} />
				)}

				<HomePage />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
