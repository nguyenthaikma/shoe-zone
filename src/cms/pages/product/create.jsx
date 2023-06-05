import PageHeader from '@components/widgets/PageHeader';
import { EditFilled } from '@ant-design/icons';
import ActionPublish from '@src/components/widgets/ActionPublish';
import { Button, Card, Col, Collapse, Form, Image, Modal, Row, Space, Typography } from 'antd';

import FormSidebar from '@src/cms/layout/FormSidebar';
import FormInput from './components/FormInput';
import { useState } from 'react';
import { media } from '@src/assets/images/media';

const { Text } = Typography;

function CreateProduct() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Col span={24}>
      <FormSidebar form={form} scrollToFirstError onFinish={onFinish}>
        <Modal width='100%' title='Media' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Row>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((item, index) => {
              return (
                <Col
                  onClick={() => {
                    form.setFieldsValue({
                      image: `anh${index + 1}`,
                    });
                    setActive(index);
                  }}
                  style={{ margin: 15, cursor: 'pointer', height: 'fit-content' }}
                  span={4}
                >
                  <Image
                    className={active === index && 'activeSelect'}
                    preview={false}
                    height={200}
                    style={{ display: 'block' }}
                    src={media[item]}
                  />
                </Col>
              );
            })}
          </Row>
        </Modal>
        <>
          <FormSidebar.Content>
            <Card hoverable title={<PageHeader title='Create product' isSearch={false} inCard />}>
              <FormInput />
            </Card>
          </FormSidebar.Content>
          <FormSidebar.Sidebar>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <ActionPublish onPublish={() => form.submit()} showInput={{ isActive: true }} />
              </Col>
              <Col span={24}>
                <Collapse defaultActiveKey={['1']} expandIconPosition='end'>
                  <Collapse.Panel header='Thumbnail' key='1'>
                    <Form.Item name='image'>
                      <Space size={10} align='center'>
                        {active ? <Image src={media[active]} /> : <Text>No file selected</Text>}

                        <Button onClick={showModal}>{active ? <EditFilled /> : <Text>No file selected</Text>}</Button>
                      </Space>
                    </Form.Item>
                  </Collapse.Panel>
                </Collapse>
              </Col>
            </Row>
          </FormSidebar.Sidebar>
        </>
      </FormSidebar>
    </Col>
  );
}

export default CreateProduct;
