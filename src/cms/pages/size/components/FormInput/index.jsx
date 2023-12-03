import { labelStyle } from '@src/configs/const';
import { useQueryListProduct, useQueryListSize } from '@src/queries/hooks';
import { Form, InputNumber, Select } from 'antd';

function FormInput({ data }) {
  const { data: listProduct } = useQueryListProduct();
  const { data: listSize } = useQueryListSize();
  return (
    <>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='shoesId'
        label='Shoe'
        {...labelStyle}
        initialValue={data?.shoes?.id}
        rules={[
          {
            required: true,
            message: 'shoesId is required!',
          },
        ]}
      >
        <Select placeholder='Select shoe'>
          {listProduct?.data?.data?.map((item, index) => (
            <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='quantity'
        label='Quantity'
        {...labelStyle}
        initialValue={data?.quantity}
        rules={[
          {
            required: true,
            message: 'Quantity is required!',
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} placeholder='Please enter quantity' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='size'
        label='Size'
        {...labelStyle}
        initialValue={data?.size}
        rules={[
          {
            required: true,
            message: 'size is required!',
          },
        ]}
      >
           <Select placeholder='Select size'>
          {listSize?.data?.data?.map((item, index) => (
            <Select.Option key={index} value={item.id}>{item.size}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
}

export default FormInput;
