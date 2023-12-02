import { Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTableCategory = () => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render(name, record) {
        return (
          <Link to={`/product/${record?.productID}`}>
            <Typography.Text>{name}</Typography.Text>
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
          <Link to={`/category/${record?.id}`}>Detail</Link>
        </Space>
      ),
      width: 180,
    },
  ];
};
