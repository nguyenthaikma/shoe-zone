import Notfound from '@components/screens/404';
import { Col, Form, Row, Spin } from 'antd';

function FormSidebar({ children, isLoading = false, isStatus = 'success', ...props }) {
  return (
    <Row style={{ marginTop: 14 }}>
      {isLoading ? (
        <Col span={24}>
          <Row justify='center' align='middle' style={{ height: 258 }}>
            <Col>
              <Spin tip='Loading data' />
            </Col>
          </Row>
        </Col>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {isStatus === 'success' ? (
            <Col span={24}>
              <Form {...props}>
                <Row gutter={[24, 24]}>{children}</Row>
              </Form>
            </Col>
          ) : (
            <Col span={24}>
              <Row justify='center' align='middle' style={{ height: 258 }}>
                <Col>
                  <Notfound />
                </Col>
              </Row>
            </Col>
          )}
        </>
      )}
    </Row>
  );
}
FormSidebar.Content = function ({ children }) {
  return (
    <Col xl={17} lg={15} sm={24} xs={24}>
      {children}
    </Col>
  );
};
FormSidebar.Sidebar = function ({ children }) {
  return (
    <Col xl={7} lg={9} sm={24} xs={24}>
      {children}
    </Col>
  );
};
export default FormSidebar;
