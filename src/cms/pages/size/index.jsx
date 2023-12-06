import PageHeader from '@components/widgets/PageHeader';
import { Col, Row, Table } from 'antd';

import { useQueryListSize } from '@src/queries/hooks';
import { columnsTable } from './configs/table.config';
import { useState } from 'react';

function Size() {
  const [search, setS] = useState();
  const columns = columnsTable();

  const { data: listSize } = useQueryListSize({ search });

  return (
    <Col span={24}>
      <PageHeader isSearch onSearch={(v) => setS(v)} title='Size' />
      <Row>
        <Col span={24}>
          <Table rowKey='_id' scroll={{ x: 992 }} columns={columns} dataSource={listSize?.data?.data} />
        </Col>
      </Row>
    </Col>
  );
}

export default Size;
