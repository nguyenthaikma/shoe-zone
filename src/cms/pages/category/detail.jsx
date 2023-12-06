import FormSidebar from '@src/cms/layout/FormSidebar';
import ActionPublish from '@src/components/widgets/ActionPublish';
import PageHeader from '@src/components/widgets/PageHeader';
import { checkAuth } from '@src/libs/localStorage';
import { useMutationUpdateCategory, useQueryDetailCategory } from '@src/queries/hooks';
import { Card, Col, Form, Row } from 'antd';
import { useParams } from 'react-router-dom';
import FormInput from './components/FormInput';

function DetailCategoryAdmin() {
  const { id } = useParams();
  const [form] = Form.useForm();

  const token = checkAuth();

  const { data: detailCategory } = useQueryDetailCategory(id);
  const { mutate: updateCategory } = useMutationUpdateCategory(token, id);

  const onFinish = (values) => {
    updateCategory({ ...values });
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
