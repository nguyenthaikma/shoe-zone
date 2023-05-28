import PageHeader from '@components/widgets/PageHeader';
import ActionPublish from '@src/components/widgets/ActionPublish';
import { Card, Col, Collapse, Form, Row } from 'antd';

import FormSidebar from '@src/cms/layout/FormSidebar';
import FormInput from './components/FormInput';
import SelectSingleFileFormItem from '@src/components/widgets/SelectSingleFileFormItem';

function CreateProduct() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Col span={24}>
      <FormSidebar form={form} scrollToFirstError onFinish={onFinish}>
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
                  <Collapse.Panel header='Avatar' key='1'>
                    <SelectSingleFileFormItem form={form} name='avatar' />
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
