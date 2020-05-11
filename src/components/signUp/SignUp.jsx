import React from 'react';

import { useState } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignUp.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
	const [formData, setFormData] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = formData;
		if (password !== confirmPassword) {
			alert('Password did not match');
		} else {
			try {
				const { user } = await auth.createUserWithEmailAndPassword(
					email,
					password
				);

				await createUserProfileDocument(user, { displayName });
				setFormData({
					email: '',
					password: '',
					confirmPassword: '',
					displayName: '',
				});
			} catch (err) {
				console.log(err);
			}
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I dont have an account</h2>
			<span>Sign up with your Email and password</span>

			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					handleChange={handleChange}
					value={formData.displayName}
					label='displayName'
					required
				/>
				<FormInput
					type='text'
					name='email'
					handleChange={handleChange}
					value={formData.email}
					label='email'
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
				<FormInput
					type='password'
					name='confirmPassword'
					value={formData.confirmPassword}
					handleChange={handleChange}
					label='confirmPassword'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
};
export default SignUp;
