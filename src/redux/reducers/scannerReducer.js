import { createSlice } from '@reduxjs/toolkit';

const drawerReducer = createSlice({
  name: 'scanner',
  initialState: {
    open: false,
    data: null,
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
  },
});

export default drawerReducer;
