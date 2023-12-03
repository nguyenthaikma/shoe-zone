import { Descriptions } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

function FormInput({ data }) {
  console.log(data);
  return (
    <Descriptions style={{ marginTop: 24 }} title='Order Info' layout='horizontal' bordered column={1}>
      <Descriptions.Item label='Id'>{data?.id}</Descriptions.Item>
      <Descriptions.Item label='Size'>{data?.size}</Descriptions.Item>
      <Descriptions.Item label='Quantity'>{data?.quantity}</Descriptions.Item>
      <Descriptions.Item label='Amount'>{data?.amount}</Descriptions.Item>
      <Descriptions.Item label='Is confirm'>{data?.isPaid?.toString()}</Descriptions.Item>
      <Descriptions.Item label='Shoes'>
        <Link to={`/product/${data?.shoes?.id}`}>{data?.shoes?.name}</Link>
      </Descriptions.Item>
      <Descriptions.Item label='Customer'>{data?.user?.username}</Descriptions.Item>
      <Descriptions.Item label='Created time'>{moment(data?.createdDate).format('DD/MM/YYYY HH:mm')}</Descriptions.Item>
    </Descriptions>
  );
}

export default FormInput;
