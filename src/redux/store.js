import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './reducers/drawerReducer';
import scannerReducer from './reducers/scannerReducer';

const store = configureStore({
  reducer: {
    drawerReducer: drawerReducer.reducer,
    scannerReducer: scannerReducer.reducer,
  },
});

export default store;
