import { getStoredAuth } from '@src/libs/localStorage';
import { useQueryListSize } from '@src/queries/hooks';
import { useMutationAddCart } from '@src/queries/hooks/cart';
import { closeAddSizeAction } from '@src/redux/actions/drawerReducer';
import { Modal, Select } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ModalAddSizes({ id }, ref) {
  const dispatch = useDispatch();
  const { isOpenAddSize, productIdSize, priceSize, image } = useSelector((state) => state.drawerReducer);
  const profile = getStoredAuth();

  const [select, setSelect] = useState();

  const { data: listSize } = useQueryListSize(productIdSize);
  console.log(listSize);
  const { mutate: addCart } = useMutationAddCart();

  const handleOk = () => {
    addCart(
      { userID: profile.userID, productID: productIdSize, size: select, price: priceSize, image },
      {
        onSuccess: () => {
          dispatch(closeAddSizeAction());
        },
      }
    );
  };

  const handleCancel = () => {
    dispatch(closeAddSizeAction());
  };

  return (
    <Modal title='Choose size' open={isOpenAddSize} okText='Add to cart' onOk={handleOk} onCancel={handleCancel}>
      <Select
        onChange={(value) => setSelect(value)}
        label='Choose size'
        placeholder='Choose size'
        style={{ minWidth: 200 }}
      >
        {listSize?.data?.map((item, index) => (
          <Select.Option key={index} value={item.size}>
            {item.size}
          </Select.Option>
        ))}
      </Select>
    </Modal>
  );
}

export default ModalAddSizes;
