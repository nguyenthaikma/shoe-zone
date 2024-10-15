import { createSlice } from '@reduxjs/toolkit';

const drawerReducer = createSlice({
  name: 'scanner',
  initialState: {
    open: false,
    data: null,
    isSuccess: false,
    PI_merchant: false,
  },
  reducers: {
    onOpen: (state, action) => {
      state.open = true;
    },
    onClose: (state, action) => {
      state.open = false;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
    updateSuccess: (state, action) => {
      state.isSuccess = action.payload;
      state.open = false;
    },
    updatePiMerchant: (state, action) => {
      state.PI_merchant = action.payload;
    },
  },
});

export default drawerReducer;
