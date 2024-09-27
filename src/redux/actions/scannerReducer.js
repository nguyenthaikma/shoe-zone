import scannerReducer from '../reducers/scannerReducer';

export const onOpenScanner = () => {
  return (dispatch, getState) => {
    dispatch(scannerReducer.actions.onOpen());
  };
};

export const onCloseScanner = () => {
  return (dispatch, getState) => {
    dispatch(scannerReducer.actions.onClose());
  };
};

export const addDataActionScanner = (data) => {
  return (dispatch, getState) => {
    dispatch(scannerReducer.actions.addData(data));
  };
};

