import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './globalStyles/GlobalStyle';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';
import Spinner from './components/WithSpinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const SignInSignUpPage = lazy(() =>
	import('./pages/signIn-signUp/SignInSignUpPage')
);
const Shop = lazy(() => import('./pages/shop/Shop'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = () => {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />

			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={Shop} />

						<Route exact path='/checkout' component={Checkout} />
						{currentUser ? (
							<Redirect to='/' />
						) : (
							<Route exact path='/signin' component={SignInSignUpPage} />
						)}
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
