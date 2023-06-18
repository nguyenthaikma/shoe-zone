import { Descriptions } from 'antd';
import moment from 'moment';

function FormInput({ data, listSize }) {
  return (
    <Descriptions style={{ marginTop: 24 }} title='Order Info' layout='vertical' bordered>
      <Descriptions.Item label='Id'>{data.orderDetailID}</Descriptions.Item>
      <Descriptions.Item label='Size'>{data.size}</Descriptions.Item>
      <Descriptions.Item label='Quantity'>{data.number}</Descriptions.Item>
      <Descriptions.Item label='Total price'>{data.price}</Descriptions.Item>
      <Descriptions.Item label='Created time'>{moment(data.createdDate).format('DD/MM/YYYY HH:mm')}</Descriptions.Item>
    </Descriptions>
  );
}

export default FormInput;
