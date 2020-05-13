import React from 'react';
import { CustomButtonStyle } from './CustomButtonStyles';
const CustomButton = (props) => {
	return <CustomButtonStyle {...props}>{props.children}</CustomButtonStyle>;
};

export default CustomButton;
