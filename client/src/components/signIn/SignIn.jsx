import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignIn.scss';
import { googleSignin, signinEmailPassword } from '../../redux/userSlice';

const SignIn = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signinEmailPassword(formData));

		setFormData({ ...formData, email: '', password: '' });
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your Email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='email'
					handleChange={handleChange}
					value={formData.email}
					label='Email'
					required
				/>

				<FormInput
					type='password'
					name='password'
					value={formData.password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>sign in</CustomButton>
					<CustomButton
						type='button'
						onClick={() => dispatch(googleSignin())}
						isGoogle
					>
						sign With google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
