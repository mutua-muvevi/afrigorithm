import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import serviceReducer from './services/reducer';
import domainReducer from './domain/reducer';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"service",
		"domain"
	],
};

const rootReducer = combineReducers({
	service: serviceReducer,
	domain: domainReducer
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;