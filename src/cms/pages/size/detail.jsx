import FormSidebar from '@src/cms/layout/FormSidebar';
import ActionPublish from '@src/components/widgets/ActionPublish';
import PageHeader from '@src/components/widgets/PageHeader';
import { checkAuth } from '@src/libs/localStorage';
import { useMutationDeleteSize, useMutationUpdateSize, useQueryDetailSize } from '@src/queries/hooks';
import { Card, Col, Form, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from './components/FormInput';

function DetailSizeAdmin() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const token = checkAuth();

  const { data: detailSize } = useQueryDetailSize(id);
  console.log(detailSize);
  const { mutate: updateSize } = useMutationUpdateSize(token, id);
  const { mutate: deleteSize } = useMutationDeleteSize(token);

  const onFinish = (values) => {
    updateSize({ ...values });
  };

  const onDelete = () => {
    deleteSize(id, {
      onSuccess: () => {
        navigate('/size');
      },
    });
  };

  return (
    <>
      <Col span={24}>
        <FormSidebar form={form} onFinish={onFinish}>
          <>
            <FormSidebar.Content>
              <Card hoverable title={<PageHeader title={'Detail size'} inCard isSearch={false} />}>
                {detailSize && <FormInput form={form} data={detailSize.data} />}
              </Card>
            </FormSidebar.Content>
            <FormSidebar.Sidebar>
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  {detailSize && (
                    <ActionPublish
                      data={detailSize.data}
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

export default DetailSizeAdmin;
