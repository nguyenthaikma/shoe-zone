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
        initialValue={data?.name}
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
        ]}
      >
        <Input placeholder='Please enter name' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='categoryID'
        label='Category'
        {...labelStyle}
        initialValue={data?.categoryID}
        rules={[
          {
            required: true,
            message: 'Category is required!',
          },
        ]}
      >
        <Select placeholder='Select category'>
          <Select.Option value='cate1'>Sport</Select.Option>
          <Select.Option value='cate2'>Gym</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='price'
        label='Price'
        {...labelStyle}
        initialValue={data?.price}
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
        name='sizes'
        label='Size'
        {...labelStyle}
        initialValue={data?.sizes}
        rules={[
          {
            required: true,
            message: 'Size is required!',
          },
        ]}
      >
        <Select placeholder='Select size' mode='multiple'>
          {[36, 37, 38, 39, 40, 41, 42, 43, 44].map((item) => (
            <Select.Option value={item} key={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
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
        <Input placeholder='Please enter vendor' />
      </Form.Item>
    </>
  );
}

export default FormInput;
