import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
Modal.setAppElement('#root');
const CartMenu = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
			<button onClick={openModal}>Open Modal</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<ul>
					<li>1</li>
				</ul>{' '}
			</Modal>
		</div>
	);
};

export default CartMenu;
