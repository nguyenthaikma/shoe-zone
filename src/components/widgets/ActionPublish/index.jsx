import { CalendarOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, DatePicker, Divider, Popconfirm, Row } from 'antd';

const { Panel } = Collapse;

function ActionPublish({
  data,
  loadingPublish = false,
  loadingUpdate = false,
  loadingDelete = false,
  onPublish,
  onDelete,
  onUpdate,
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
