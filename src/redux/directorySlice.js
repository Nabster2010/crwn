import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sections: [
		{
			title: 'HATS',
			imgUrl:
				'https://cdn.shopify.com/s/files/1/1643/5313/products/conner-hats-outback-hats-flinders-outback-wool-hat-black-small-24807845768_1024x1024.jpg?v=1524015808',
			id: 1,
			linkUrl: 'hats',
		},
		{
			title: 'JACKETS',
			imgUrl:
				'https://5.imimg.com/data5/BV/UY/ZP/SELLER-59756470/mens-cotton-jacket-500x500.jpg',
			id: 2,
			linkUrl: 'jackets',
		},
		{
			title: 'SNEACKERS',
			imgUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKjzQHLBp-M8yHENQxw_odAkTf2y3-44RIbPciY4QKRWe9Y3ta&usqp=CAU',
			id: 3,
			linkUrl: 'sneakers',
		},
		{
			title: 'WOMENS',
			imgUrl:
				'https://image.made-in-china.com/43f34j00DJrthdTEaebp/Alibaba-Express-Free-Dropshipping-Womens-Clothes-Bridal-Party-Dresses-Printed.jpg',
			id: 4,
			size: 'large',
			linkUrl: 'womens',
		},
		{
			title: 'MANS',
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0042/8641/4961/products/natna-shop-clothes-black-m-2019-new-fashion-brand-sweaters-man-pullover-v-neck-slim-fit-jumpers-knitwear-woolen-autumn-korean-style-casual-mens-clothes-11807365726321_1024x1024.jpg?v=1581184477',
			id: 5,
			size: 'large',
			linkUrl: 'mens',
		},
	],
};
export const directorySlice = createSlice({
	name: 'directory',
	initialState: initialState,
	reducers: {},
});

export default directorySlice.reducer;
