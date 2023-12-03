import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { useQueryListOrder } from '@src/queries/hooks';
import { columnsTableUser } from './configs/table.config';

function Order() {
  const columns = columnsTableUser();

  const { data: listOrder } = useQueryListOrder();
  console.log(listOrder);

  return (
    <Col span={24}>
      <PageHeader title='Order' />
      <Row>
        <Col span={24}>
          <Table rowKey='_id' scroll={{ x: 992 }} columns={columns} dataSource={listOrder?.data?.data} />
        </Col>
      </Row>
    </Col>
  );
}

export default Order;
