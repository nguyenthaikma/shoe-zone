import PageHeader from '@components/widgets/PageHeader';
import ActionPublish from '@src/components/widgets/ActionPublish';
import { Card, Col, Form, Row } from 'antd';

import FormSidebar from '@src/cms/layout/FormSidebar';
import { checkAuth } from '@src/libs/localStorage';
import { useMutationCreateSize } from '@src/queries/hooks';
import FormInput from './components/FormInput';

function CreateSize() {
  const [form] = Form.useForm();
  const token = checkAuth();

  const { mutate: createSize } = useMutationCreateSize(token);

  const onFinish = (values) => {
    createSize(
      {
        ...values,
      },
    );
  };

  return (
    <Col span={24}>
      <FormSidebar form={form} scrollToFirstError onFinish={onFinish}>
        <>
          <FormSidebar.Content>
            <Card hoverable title={<PageHeader title='Create size' isSearch={false} inCard />}>
              <FormInput />
            </Card>
          </FormSidebar.Content>
          <FormSidebar.Sidebar>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <ActionPublish onPublish={() => form.submit()} showInput={{ isActive: true }} />
              </Col>
            </Row>
          </FormSidebar.Sidebar>
        </>
      </FormSidebar>
    </Col>
  );
}

export default CreateSize;
