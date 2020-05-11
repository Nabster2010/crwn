import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => {
	const { title, imgUrl, match, history, linkUrl } = props;

	return (
		<div
			className='menu-item'
			onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
		>
			<div
				style={{ backgroundImage: `url(${imgUrl})` }}
				className='background-image'
			></div>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
