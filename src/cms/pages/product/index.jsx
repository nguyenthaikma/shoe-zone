import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { useQueryListProduct } from '@src/queries/hooks';
import { columnsTableUser } from './configs/table.config';

function Product() {
  const columns = columnsTableUser();

  const { data: listProduct } = useQueryListProduct();
  return (
    <Col span={24}>
      <PageHeader title='Product' />
      <Row>
        <Col span={24}>
          <Table
            pagination={false}
            rowKey='_id'
            scroll={{ x: 992 }}
            columns={columns}
            dataSource={listProduct?.data?.data}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default Product;
