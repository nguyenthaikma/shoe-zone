import { CalendarOutlined, ClockCircleOutlined, CloseCircleOutlined, PushpinOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Collapse, DatePicker, Divider, Form, Popconfirm, Row, Select } from 'antd';

const { Panel } = Collapse;

function ActionPublish({
  data,
  statusOption,
  loadingPublish = false,
  loadingUpdate = false,
  loadingDelete = false,
  onPublish,
  onDelete,
  onUpdate,
  showInput,
}) {
  return (
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
          {!!showInput?.scheduleAt && (
            <Col span={24}>
              <Row>
                <Col flex='23px'>
                  <ClockCircleOutlined style={{ marginTop: 9 }} />
                </Col>
                <Col flex='1'>
                  <Form.Item name='scheduleAt'>
                    <DatePicker showTime allowClear={false} className='date-picker-input' placeholder='Schedule time' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          )}
          {!!showInput?.expiredAt && (
            <Col span={24}>
              <Row>
                <Col flex='23px'>
                  <CloseCircleOutlined style={{ marginTop: 9 }} />
                </Col>
                <Col flex='1'>
                  <Form.Item name='expiredAt'>
                    <DatePicker showTime allowClear={false} className='date-picker-input' placeholder='Expire time' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          )}
          {!!showInput?.isActive && (
            <Col span={24}>
              <Row>
                <Col flex='23px'>
                  <PushpinOutlined style={{ marginTop: 9 }} />
                </Col>
                <Col flex='1'>
                  <Form.Item name='isActive' initialValue={!!data?.isActive}>
                    <Select>
                      <Select.Option value>
                        <Badge status='success' text='ACTIVE' />
                      </Select.Option>
                      <Select.Option value={false}>
                        <Badge status='error' text='INACTIVE' />
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          )}
          {!!showInput?.status && (
            <Col span={24}>
              <Row>
                <Col flex='23px'>
                  <PushpinOutlined style={{ marginTop: 9 }} />
                </Col>
                <Col flex='1'>
                  <Form.Item name='status' initialValue={data?.status}>
                    <Select>
                      {statusOption.map((item) => (
                        <Select.Option value={item.value} key={item.key}>
                          <Badge status={item.status} text={item.value.toLocaleUpperCase()} />
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
        <Divider style={{ marginTop: 0, marginBottom: 18 }} />
        <Row justify='space-between'>
          <Col>
            {data && onDelete && (
              <Popconfirm
                placement='topRight'
                title='Are you sure?'
                onConfirm={() => {
                  if (onDelete) void onDelete();
                }}
              >
                <Button loading={loadingDelete}>Delete</Button>
              </Popconfirm>
            )}
          </Col>
          <Col>
            {data ? (
              <Button
                type='primary'
                loading={loadingUpdate}
                onClick={() => {
                  if (onUpdate) void onUpdate();
                }}
              >
                Update
              </Button>
            ) : (
              <Button
                type='primary'
                loading={loadingPublish}
                onClick={() => {
                  if (onPublish) void onPublish();
                }}
              >
                Publish
              </Button>
            )}
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
}

export default ActionPublish;
