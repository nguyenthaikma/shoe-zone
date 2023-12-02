import FormSidebar from '@src/cms/layout/FormSidebar';
import ActionPublish from '@src/components/widgets/ActionPublish';
import PageHeader from '@src/components/widgets/PageHeader';
import { checkAuth } from '@src/libs/localStorage';
import { useMutationDeleteCategory, useMutationUpdateCategory, useQueryDetailCategory } from '@src/queries/hooks';
import { Card, Col, Form, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from './components/FormInput';

function DetailCategoryAdmin() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const token = checkAuth();

  const { data: detailCategory } = useQueryDetailCategory(id);
  const { mutate: updateCategory } = useMutationUpdateCategory(token, id);
  const { mutate: deleteCategory } = useMutationDeleteCategory(token);

  const onFinish = (values) => {
    updateCategory({ ...values });
  };

  const onDelete = () => {
    deleteCategory(id, {
      onSuccess: () => {
        navigate('/category');
      },
    });
  };

  return (
    <>
      <Col span={24}>
        <FormSidebar form={form} onFinish={onFinish}>
          <>
            <FormSidebar.Content>
              <Card hoverable title={<PageHeader title={'Detail product'} inCard isSearch={false} />}>
                {detailCategory && <FormInput form={form} data={detailCategory.data} />}
              </Card>
            </FormSidebar.Content>
            <FormSidebar.Sidebar>
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  {detailCategory && (
                    <ActionPublish
                      data={detailCategory.data}
                      showInput={{ scheduleAt: true, status: true, publishedLanguage: true }}
                      onDelete={onDelete}
                      onUpdate={() => form.submit()}
                    />
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

export default DetailCategoryAdmin;
