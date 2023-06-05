import { media } from '@src/assets/images/media';
import { Image, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTableUser = () => {
  return [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (value) => {
        return value ? (
          <Image width={40} alt='thumbnail' height={40} src={media.find((item) => item.key === value)?.value} />
        ) : (
          '__'
        );
      },
    },
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
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (v) => v || '__',
    },
    {
      title: 'Material',
      dataIndex: 'metarial',
      key: 'metarial',
      render: (v) => v || '__',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
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
          <Link to={`/product/${record?.productID}`}>Detail</Link>
        </Space>
      ),
      width: 180,
    },
  ];
};
