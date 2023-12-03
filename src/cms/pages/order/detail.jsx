import { CalendarOutlined } from '@ant-design/icons';
import FormSidebar from '@src/cms/layout/FormSidebar';
import PageHeader from '@src/components/widgets/PageHeader';
import { useMutationApproveOrder, useQueryDetailOrder } from '@src/queries/hooks';
import { Button, Card, Col, Collapse, DatePicker, Divider, Form, Popconfirm, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from './components/FormInput';
import { checkAuth } from '@src/libs/localStorage';

const { Panel } = Collapse;

function DetailOrder() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const accessToken = checkAuth();

  const { data: detailOrder } = useQueryDetailOrder(id);
  console.log(detailOrder);
  const { mutate: approve } = useMutationApproveOrder(accessToken);
  const handleApprove = () => {
    approve(
      { orderID: detailOrder.data[0].orderID, gmail: 'nguyenthai9cc@gmail.com' },
      {
        onSuccess: () => {
          navigate('/order');
        },
      }
    );
  };

  return (
    <>
      <Col span={24}>
        <FormSidebar form={form}>
          <>
            <FormSidebar.Content>
              <Card hoverable title={<PageHeader title='Detail order' inCard isSearch={false} />}>
                <FormInput data={detailOrder?.data} />
              </Card>
            </FormSidebar.Content>
            <FormSidebar.Sidebar>
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  {detailOrder && (
                    <Collapse defaultActiveKey={['1']} expandIconPosition='end'>
                      <Panel header='Action' key='1'>
                        <Row>
                          <Col span={24} style={{ marginBottom: 24 }}>
                            <Row>
                              <Col flex='23px'>
                                <CalendarOutlined style={{ marginTop: 9 }} />
                              </Col>
                              <Col flex='1'>
                                <DatePicker disabled showTime allowClear={false} className='date-picker-input' />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Divider style={{ marginTop: 0, marginBottom: 18 }} />
                        <Row>
                          <Popconfirm placement='topRight' title='Are you sure?' onConfirm={handleApprove}>
                            <Button style={{ marginLeft: 'auto' }} type='primary'>
                              Approve
                            </Button>
                          </Popconfirm>
                        </Row>
                      </Panel>
                    </Collapse>
                  )}
                </Col>
              </Row>
            </FormSidebar.Sidebar>
          </>
        </FormSidebar>
      </Col>
    </>
  );
}

export default DetailOrder;
