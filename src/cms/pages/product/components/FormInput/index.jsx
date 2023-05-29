import { labelStyle } from '@src/configs/const';
import { Form, Input, Select } from 'antd';

function FormInput({ data }) {
  return (
    <>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='name'
        label='Product name'
        {...labelStyle}
        initialValue={data?.username}
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
        ]}
      >
        <Input placeholder='Please enter username' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='categoryId'
        label='Category'
        {...labelStyle}
        initialValue={data?.Category}
        rules={[
          {
            required: true,
            message: 'Category is required!',
          },
        ]}
      >
        <Select placeholder='Select category'>
          <Select.Option value='1'>Sport</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='price'
        label='Price'
        {...labelStyle}
        initialValue={data?.lastName}
        rules={[
          {
            required: true,
            message: 'Price is required!',
          },
        ]}
      >
        <Input placeholder='Please enter price' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='metarial'
        label='Material'
        {...labelStyle}
        initialValue={data?.metarial}
      >
        <Input placeholder='Please enter material' />
      </Form.Item>
      <Form.Item style={{ marginBottom: 24 }} name='vendor' label='Vendor' {...labelStyle} initialValue={data?.phone}>
        <Input placeholder='Please enter phone' />
      </Form.Item>
    </>
  );
}

export default FormInput;
