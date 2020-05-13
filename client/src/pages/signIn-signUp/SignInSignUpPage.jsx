import React from 'react';
import './SignInSignUpPage.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
const SignInSignUpPage = () => {
	return (
		<div className='sign-in-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInSignUpPage;
