import testReducer from '../reducers/drawerReducer';

export const onOpen = () => {
  return (dispatch, getState) => {
    dispatch(testReducer.actions.onOpen());
  };
};

export const onClose = () => {
  return (dispatch, getState) => {
    dispatch(testReducer.actions.onClose());
  };
};

export const addItemAction = (price) => {
  return (dispatch, getState) => {
    dispatch(testReducer.actions.addItem({ price }));
  };
};

export const openAddSizeAction = (id, price, image) => {
  return (dispatch, getState) => {
    dispatch(testReducer.actions.openAddSize(id, price, image));
  };
};

export const closeAddSizeAction = () => {
  return (dispatch, getState) => {
    dispatch(testReducer.actions.closeAddSize());
  };
};
