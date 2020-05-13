import React from 'react';
import './FormInput.scss';

const FormInput = ({ label, handleChange, ...rest }) => {
	return (
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...rest} />
			{label ? (
				<label
					className={`${rest.value.length ? 'shrink' : ''}form-input-label `}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
