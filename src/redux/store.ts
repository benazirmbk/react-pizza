import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/FilterSlice';
import cart from './slices/CartSlice';
import pizza from './slices/pizzaSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
