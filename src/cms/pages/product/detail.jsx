import { EditFilled } from '@ant-design/icons';
import { media } from '@src/assets/images/media';
import FormSidebar from '@src/cms/layout/FormSidebar';
import ActionPublish from '@src/components/widgets/ActionPublish';
import PageHeader from '@src/components/widgets/PageHeader';
import { checkAuth } from '@src/libs/localStorage';
import {
  useMutationDeleteProduct,
  useMutationUpdateProduct,
  useQueryDetailProduct
} from '@src/queries/hooks';
import { Button, Card, Col, Collapse, Form, Image, Modal, Row, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from './components/FormInput';

const { Text } = Typography;

function DetailProductAdmin() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = checkAuth();

  const { data: detailProduct } = useQueryDetailProduct(id);
  const { mutate: updateProduct } = useMutationUpdateProduct(token);
  const { mutate: deleteProduct } = useMutationDeleteProduct(token);

  const defaultImg = useMemo(() => detailProduct?.data[0]?.image, [detailProduct]);
  const [active, setActive] = useState(defaultImg);

  const onFinish = (values) => {
    updateProduct({ ...values, categoryId: Number(values?.categoryId), image: active || defaultImg });
  };

  const onDelete = () => {
    deleteProduct(id, {
      onSuccess: () => {
        navigate('/product');
      },
    });
  };

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
    <>
      <Col span={24}>
        <FormSidebar form={form} onFinish={onFinish}>
          <Modal width='100%' title='Media' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Row>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((item, index) => {
                return (
                  <Col
                    onClick={() => {
                      form.setFieldsValue({
                        image: `anh${index + 1}`,
                      });
                      setActive(`anh${index + 1}`);
                    }}
                    style={{ margin: 15, cursor: 'pointer', height: 'fit-content' }}
                    span={4}
                  >
                    <Image
                      className={active === `anh${index + 1}` && 'activeSelect'}
                      preview={false}
                      height={200}
                      style={{ display: 'block' }}
                      src={media.find((item) => item.key === `anh${index + 1}`).value}
                    />
                  </Col>
                );
              })}
            </Row>
          </Modal>
          <>
            <FormSidebar.Content>
              <Card hoverable title={<PageHeader title={'Detail product'} inCard isSearch={false} />}>
                {detailProduct && (
                  <FormInput
                    form={form}
                    data={detailProduct.data}
                  />
                )}
              </Card>
            </FormSidebar.Content>
            <FormSidebar.Sidebar>
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  {detailProduct && (
                    <ActionPublish
                      data={detailProduct.data}
                      showInput={{ scheduleAt: true, status: true, publishedLanguage: true }}
                      onDelete={onDelete}
                      onUpdate={() => form.submit()}
                    />
                  )}
                </Col>

                <Col span={24}>
                  <Collapse defaultActiveKey={['1']} expandIconPosition='end'>
                    <Collapse.Panel header='Thumbnail' key='1'>
                      <Form.Item name='image'>
                        <Space size={10} align='center'>
                          {defaultImg || active ? (
                            <Image src={media.find((item) => item.key === (active || defaultImg)).value} />
                          ) : (
                            <Text>No file selected</Text>
                          )}
                          <Button onClick={showModal}>
                            {defaultImg || active ? <EditFilled /> : <Text>No file selected</Text>}
                          </Button>
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
    </>
  );
}

export default DetailProductAdmin;
