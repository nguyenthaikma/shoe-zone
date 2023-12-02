import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { useQueryListCategory } from '@src/queries/hooks';
import { columnsTableCategory } from './configs/table.config';

function Category() {
  const columns = columnsTableCategory();

  const { data: listCategory } = useQueryListCategory();

  return (
    <Col span={24}>
      <PageHeader title='Category' />
      <Row>
        <Col span={24}>
          <Table rowKey='_id' scroll={{ x: 992 }} columns={columns} dataSource={listCategory?.data?.data} />
        </Col>
      </Row>
    </Col>
  );
}

export default Category;
