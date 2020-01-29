import {createStore
, applyMiddleware
} from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {appState} from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appState);

let middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const store = createStore(
  persistedReducer, 
  applyMiddleware(...middleware)
);  
const persistor = persistStore(store);

export {store, persistor, persistConfig};
export default store;
