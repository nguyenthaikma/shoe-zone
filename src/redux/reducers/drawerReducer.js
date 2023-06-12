import { createSlice } from '@reduxjs/toolkit';

const drawerReducer = createSlice({
  name: 'test',
  initialState: {
    isOpenAddSize: false,
    priceSize: 0,
    productIdSize: 0,
    open: false,
    totalPrice: 0,
    image: '',
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
    openAddSize: (state, action) => {
      state.isOpenAddSize = true;
      state.productIdSize = action.payload.productIdSize;
      state.priceSize = action.payload.priceSize;
      state.image = action.payload.image;
    },
    closeAddSize: (state, action) => {
      state.isOpenAddSize = false;
    },
  },
});

export default drawerReducer;
