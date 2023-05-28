import { UsergroupAddOutlined, DropboxOutlined } from '@ant-design/icons';
import GlanceCardDashboard from '@src/components/widgets/GlanceCardDashboard';
import { Col, Row } from 'antd';

function Dashboard() {
  return (
    <Col span={24}>
      <Row gutter={[30, 30]} style={{ marginTop: 10 }}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col xl={6} lg={8} md={12} sm={24} xs={24}>
              <GlanceCardDashboard
                icon={<UsergroupAddOutlined style={{ fontSize: 60 }} />}
                label='Users'
                total={12}
                moreInfo='/user'
              />
            </Col>
            <Col xl={6} lg={8} md={12} sm={24} xs={24}>
              <GlanceCardDashboard
                icon={<DropboxOutlined style={{ fontSize: 60 }} />}
                label='Product'
                total={120}
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
