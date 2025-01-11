// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your slices here
import authReducer from './slices/authSlice';
import rentReducer from './slices/rentSlice';
import transactionReducer from './slices/transaction/transactionSlice';

// Define the shape of the root state
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  rent: rentReducer,
  transactions: transactionReducer
});

// Configure Persist
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'rent','transactions'], 
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // Uncomment the following lines to enable Redux DevTools Extension
  // devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
