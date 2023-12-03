import { Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTable = () => {
  return [
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      render(name, record) {
        return (
          <Link to={`/size/${record?.id}`}>
            <Typography.Text>{name}</Typography.Text>
          </Link>
        );
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Shoe',
      dataIndex: 'shoes',
      key: 'shoes',
      render(shoes) {
        return (
          <Link to={`/product/${shoes?.id}`}>
            <Typography.Text>{shoes?.name}</Typography.Text>
          </Link>
        );
      },
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
          <Link to={`/size/${record?.id}`}>Detail</Link>
        </Space>
      ),
      width: 180,
    },
  ];
};
