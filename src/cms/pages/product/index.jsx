import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { useQueryListProduct } from '@src/queries/hooks';
import { columnsTableUser } from './configs/table.config';

function Product() {
  const columns = columnsTableUser();

  const { data: listProduct } = useQueryListProduct({ id: 'list' });

  return (
    <Col span={24}>
      <PageHeader title='Product' />
      <Row>
        <Col span={24}>
          <Table rowKey='_id' scroll={{ x: 992 }} columns={columns} dataSource={listProduct?.data} />
        </Col>
      </Row>
    </Col>
  );
}

export default Product;
