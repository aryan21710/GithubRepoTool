import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from "../reducers/rootReducer";

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = process.env.NODE_ENV === 'production'
  ? createStore(persistedReducer, applyMiddleware(thunk))
  : createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

store.subscribe(() => {
  console.log("LATEST STATE AFTER STATE UPDATE INSIDE STORE", store.getState());
});
