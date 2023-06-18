import { UsergroupAddOutlined, DropboxOutlined } from '@ant-design/icons';
import GlanceCardDashboard from '@src/components/widgets/GlanceCardDashboard';
import { checkAuth } from '@src/libs/localStorage';
import { useQueryListProduct, useQueryListUser } from '@src/queries/hooks';
import { Col, Row } from 'antd';
import { useMemo } from 'react';

function Dashboard() {
  const accessToken = checkAuth();

  const { data: listProduct } = useQueryListProduct({ id: 'list', from: 0 });
  const { data: listUser } = useQueryListUser(accessToken);

  const totalProduct = useMemo(() => listProduct?.data?.length, [listProduct]);
  const totalUser = useMemo(() => listUser?.data?.length, [listUser]);

  return (
    <Col span={24}>
      <Row gutter={[30, 30]} style={{ marginTop: 10 }}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col xl={6} lg={8} md={12} sm={24} xs={24}>
              <GlanceCardDashboard
                icon={<UsergroupAddOutlined style={{ fontSize: 60 }} />}
                label='Users'
                total={totalUser || 0}
                moreInfo='/user'
              />
            </Col>
            <Col xl={6} lg={8} md={12} sm={24} xs={24}>
              <GlanceCardDashboard
                icon={<DropboxOutlined style={{ fontSize: 60 }} />}
                label='Product'
                total={totalProduct || 0}
                moreInfo='/product'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Dashboard;
