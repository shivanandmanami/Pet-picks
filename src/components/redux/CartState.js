// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartReducer'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    // Handle errors
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers if needed
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
