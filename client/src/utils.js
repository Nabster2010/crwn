export const addItem = (newItem, cartItems) => {
	const existingItem = cartItems.find((item) => item.id === newItem.id);
	if (existingItem) {
		return cartItems.map((item) =>
			item.id === newItem.id
				? { ...item, quantity: Number(item.quantity + 1) }
				: item
		);
	} else {
		return [...cartItems, { ...newItem, quantity: Number(1) }];
	}
};

export const getQuantity = (cartItems) =>
	cartItems.reduce((total, item) => total + item.quantity, 0);
export const getTotal = (cartItems) =>
	cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
