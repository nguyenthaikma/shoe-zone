import PageHeader from '@components/widgets/PageHeader';
import ActionPublish from '@src/components/widgets/ActionPublish';
import { Card, Col, Form, Row } from 'antd';

import FormSidebar from '@src/cms/layout/FormSidebar';
import { checkAuth } from '@src/libs/localStorage';
import { useMutationCreateCategory } from '@src/queries/hooks';
import { useNavigate } from 'react-router-dom';
import FormInput from './components/FormInput';

function CreateCategory() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const token = checkAuth();

  const { mutate: createProduct } = useMutationCreateCategory(token);

  const onFinish = (values) => {
    createProduct(
      {
        ...values,
        image: '1',
      },
      {
        onSuccess: () => {
          navigate('/category');
        },
      }
    );
  };

  return (
    <Col span={24}>
      <FormSidebar form={form} scrollToFirstError onFinish={onFinish}>
        <>
          <FormSidebar.Content>
            <Card hoverable title={<PageHeader title='Create category' isSearch={false} inCard />}>
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

export default CreateCategory;
