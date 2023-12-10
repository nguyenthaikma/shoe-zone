import { checkAuth } from '@src/libs/localStorage';
import { useMutationAddCart } from '@src/queries/hooks/cart';
import { Col, Modal, Select, Typography, notification } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

function ModalAddSizes({ listSize, id }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = checkAuth();

  const navigate = useNavigate();

  const [select, setSelect] = useState();

  const { mutate: addCart } = useMutationAddCart();

  const handleOk = () => {
    if (!accessToken) {
      notification.error({ message: 'Please login to continue!' });
      return navigate('/login');
    }

    addCart(
      { quantity: 1, shoesId: id, size: select },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      }
    );
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    onOpen: (x) => setIsOpen(x),
  }));

  return (
    <Modal title='Choose size' open={isOpen} okText='Add to cart' onOk={handleOk} onCancel={handleCancel}>
      <Select
        onChange={(value) => setSelect(value)}
        label='Choose size'
        placeholder='Choose size'
        style={{ width: '100%', height: 60 }}
      >
        {listSize?.map((item, index) => (
          <Select.Option disabled={item.quantity <= 0} key={index} value={item.size}>
            <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ display: 'flex' }}>{item.size}</Text>
              <Text>
                Available: <Text strong>{item.quantity}</Text>
              </Text>
            </Col>
          </Select.Option>
        ))}
      </Select>
    </Modal>
  );
}

export default forwardRef(ModalAddSizes);
