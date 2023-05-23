import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './reducers/drawerReducer';

const store = configureStore({
  reducer: {
    drawerReducer: drawerReducer.reducer,
  },
});

export default store;
