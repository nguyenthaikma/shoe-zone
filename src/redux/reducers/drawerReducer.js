import { createSlice } from '@reduxjs/toolkit';

const drawerReducer = createSlice({
  name: 'test',
  initialState: {
    open: false,
    totalPrice: 0,
  },
  reducers: {
    onOpen: (state, action) => {
      state.open = true;
    },
    onClose: (state, action) => {
      state.open = false;
    },
    addItem: (state, action) => {
      state.totalPrice += action.payload.price;
    },
  },
});

export default drawerReducer;
