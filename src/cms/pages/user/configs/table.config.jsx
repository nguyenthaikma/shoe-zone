import { Button, Popconfirm, Space } from 'antd';
import dayjs from 'dayjs';

export const columnsTableUser = (onDelete) => {
  return [
    {
      title: 'Id',
      dataIndex: 'userID',
      key: 'userID',
      render: (v) => v || '__',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (v) => v || '__',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (v) => v || '__',
    },
    {
      title: 'Phone',
      dataIndex: 'mobile',
      key: 'mobile',
      render: (v) => v || '__',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (v) => v || '__',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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
          <Popconfirm
            placement='topRight'
            title='Are you sure?'
            onConfirm={() => {
              if (onDelete) onDelete(record.userID);
            }}
          >
            <Button style={{ color: 'red' }} type='link'>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 180,
    },
  ];
};
