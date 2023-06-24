import { checkAuth, getStoredAuth } from '@src/libs/localStorage';
import { useQueryListSize } from '@src/queries/hooks';
import { useMutationAddCart } from '@src/queries/hooks/cart';
import { closeAddSizeAction } from '@src/redux/actions/drawerReducer';
import { Modal, Select, Typography, notification } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

function ModalAddSizes({ id }, ref) {
  const dispatch = useDispatch();
  const { isOpenAddSize, productIdSize, priceSize, image } = useSelector((state) => state.drawerReducer);
  const profile = getStoredAuth();
  const accessToken = checkAuth();
  const navigate = useNavigate();

  const [select, setSelect] = useState();

  const { data: listSize } = useQueryListSize(productIdSize);

  const { mutate: addCart } = useMutationAddCart();

  const handleOk = () => {
    if (!accessToken) {
      dispatch(closeAddSizeAction());
      notification.error({ message: 'Please login to continue!' });
      return navigate('/login');
    }

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
        style={{ width: '80%' }}
      >
        {listSize?.data?.map((item, index) => (
          <Select.Option disabled={item.quanlity <= 0} key={index} value={item.size}>
            <Text style={{ display: 'flex' }}>{item.size}</Text>
            <Text>
              Available: <Text strong>{item.quanlity}</Text>
            </Text>
          </Select.Option>
        ))}
      </Select>
    </Modal>
  );
}

export default ModalAddSizes;
