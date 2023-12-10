import { Space } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTableUser = () => {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (v) => v || '__',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (v) => v || '__',
    },
    {
      title: 'Is confirm',
      dataIndex: 'isVerify',
      key: 'isVerify',
      render: (v) => v.toString(),
    },
    {
      title: 'Shoe',
      dataIndex: 'shoes',
      key: 'shoes',
      render: (v) => v.name || '__',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      render: (v) => v || '__',
    },
    {
      title: 'Customer',
      dataIndex: 'user',
      key: 'user',
      render: (v) => `${v?.firstName} ${v?.lastName}` || '__',
    },
    {
      title: 'Published',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => dayjs(value).format('DD/MM/YYYY'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={5}>
          <Link to={`/order/${record?.id}`}>Detail</Link>
        </Space>
      ),
      width: 180,
    },
  ];
};
