import React, { useEffect } from 'react';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/signIn-signUp/SignInSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CURRENT_USER } from './redux/userSlice';

import Checkout from './pages/checkout/Checkout';

const App = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);
	let unsubscribeFromAuth = null;
	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async function (user) {
			if (user) {
				const docRef = await createUserProfileDocument(user);
				docRef.onSnapshot((snap) => {
					dispatch(
						SET_CURRENT_USER({
							id: snap.id,
							...snap.data(),
						})
					);
				});
			} else {
				dispatch(SET_CURRENT_USER(user));
			}
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, [dispatch]);

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
