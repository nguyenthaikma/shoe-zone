import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { checkAuth } from '@src/libs/localStorage';
import { useQueryListUser } from '@src/queries/hooks';
import { columnsTableUser } from './configs/table.config';

function ListUser() {
  const accessToken = checkAuth();

  const { data: listUser } = useQueryListUser(accessToken);
  console.log(listUser);

  const columns = columnsTableUser();

  return (
    <Col span={24}>
      <PageHeader title='User' />
      <Row>
        <Col span={24}>
          <Table rowKey='_id' scroll={{ x: 992 }} columns={columns} dataSource={listUser?.data?.data} />
        </Col>
      </Row>
    </Col>
  );
}

export default ListUser;
