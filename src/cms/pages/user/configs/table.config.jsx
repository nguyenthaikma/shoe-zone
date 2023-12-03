import dayjs from 'dayjs';

export const columnsTableUser = (onDelete) => {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (v) => v || '__',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (v) => v || '__',
    },
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (v) => v || '__',
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
      render: (v) => v || '__',
    },
    {
      title: 'Is admin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: (v) => v.toString(),
    },
    {
      title: 'Published',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => dayjs(value).format('DD/MM/YYYY HH:mm:ss'),
    },
  ];
};
