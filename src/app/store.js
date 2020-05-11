import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import cartReducer from '../redux/cartSlice';
import directoryReducer from '../redux/directorySlice';
import shopReducer from '../redux/shopSlice';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'directory', 'shop'],
};
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
	reducer: persistedReducer,
});
let persistor = persistStore(store);
export { store, persistor };
