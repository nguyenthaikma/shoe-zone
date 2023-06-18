import { Space } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTableUser = () => {
  return [
    {
      title: 'Id',
      dataIndex: 'orderID',
      key: 'orderID',
      render: (v) => v || '__',
    },
    {
      title: 'Receiver',
      dataIndex: 'shipName',
      key: 'shipName',
      render: (v) => v || '__',
    },
    {
      title: 'Phone number',
      dataIndex: 'shipMobile',
      key: 'shipMobile',
      render: (v) => v || '__',
    },
    {
      title: 'Address',
      dataIndex: 'shipAddress',
      key: 'shipAddress',
      render: (v) => v || '__',
    },
    {
      title: 'Email',
      dataIndex: 'shipEmail',
      key: 'shipEmail',
      render: (v) => v || '__',
    },
    {
      title: 'Total price',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (v) => `$${v}` || '__',
    },
    {
      title: 'Order status',
      dataIndex: 'status',
      key: 'status',
      render: (v) => v || '__',
    },
    {
      title: 'Published',
      dataIndex: 'createDate',
      key: 'createDate',
      render: (value) => dayjs(value).format('DD/MM/YYYY HH:mm:ss'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={5}>
          <Link to={`/order/${record?.orderID}`}>Detail</Link>
        </Space>
      ),
      width: 180,
    },
  ];
};
