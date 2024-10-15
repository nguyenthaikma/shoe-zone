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

export const updateSuccessActionScanner = (data) => {
  return (dispatch, getState) => {
    dispatch(scannerReducer.actions.updateSuccess(data));
  };
};

export const updatePiMerchant = (data) => {
  return (dispatch, getState) => {
    dispatch(scannerReducer.actions.updatePiMerchant(data));
  };
};

