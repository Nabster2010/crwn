import React from 'react';
import MenuItem from '../menu-items/MenuItem';
import './directory-menu.scss';
import { useSelector } from 'react-redux';
const DirectoryMenu = () => {
	const { sections } = useSelector((state) => state.directory);
	return (
		<div className='directory-menu'>
			{sections.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</div>
	);
};

export default DirectoryMenu;
