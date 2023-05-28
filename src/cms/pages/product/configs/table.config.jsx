import { UserOutlined } from '@ant-design/icons';
import { FORMAT_TIME_DEFAULT } from '@src/configs/const.config';
import { Avatar, Badge, Col, Row, Space, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const columnsTableUser = () => {
  return [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (value) => <Avatar size={32} icon={<UserOutlined />} src={value?.location} />,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      sorter: true,
      render(username, record) {
        return (
          <Link to={`/user/${record?._id}`}>
            <Typography.Text>{username}</Typography.Text>
          </Link>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (v) => v || '__',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (v) => v || '__',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles) => (
        <Row gutter={[0, 5]}>
          {roles?.map((role) => (
            <Col key={role._id}>
              <Tag>{role.code}</Tag>
            </Col>
          ))}
        </Row>
      ),
      filterMultiple: true,
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (
        <Badge color={`${isActive ? 'hsl(102, 53%, 61%)' : '#f50'}`} text={`${isActive ? 'Active' : 'Inactive'}`} />
      ),
      filters: [
        { text: 'Active', value: 1 },
        { text: 'Inactive', value: 0 },
      ],
      filterMultiple: false,
    },
    {
      title: 'Email verified',
      dataIndex: 'isVerifyEmail',
      key: 'isVerifyEmail',
      render: (isVerifyEmail) => (
        <Badge color={`${isVerifyEmail ? 'hsl(102, 53%, 61%)' : '#f50'}`} text={`${isVerifyEmail ? 'Yes' : 'No'}`} />
      ),
      filters: [
        { text: 'Yes', value: 1 },
        { text: 'No', value: 0 },
      ],
      filterMultiple: false,
    },
    {
      title: 'Published',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => dayjs(value).format(FORMAT_TIME_DEFAULT),
      sorter: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={5}>
          <Link to={`/user/${record?._id}`}>Detail</Link>
        </Space>
      ),
      width: 180,
      fixed: 'right',
    },
  ];
};
