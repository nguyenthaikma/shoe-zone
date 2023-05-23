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
