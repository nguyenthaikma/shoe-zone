import { labelStyle } from '@src/configs/const';
import { Form, Input, InputNumber, Select, Switch } from 'antd';

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
        name='categoryId'
        label='Category'
        {...labelStyle}
        initialValue={data?.category?.id?.toString()}
        rules={[
          {
            required: true,
            message: 'Category is required!',
          },
        ]}
      >
        <Select placeholder='Select category'>
          <Select.Option value={1}>Sport</Select.Option>
          <Select.Option value={2}>Gym</Select.Option>
          <Select.Option value={3}>Other</Select.Option>
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
        <InputNumber style={{ width: '100%' }} placeholder='Please enter price' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='material'
        label='Material'
        {...labelStyle}
        initialValue={data?.material}
      >
        <Input placeholder='Please enter material' />
      </Form.Item>
      <Form.Item style={{ marginBottom: 24 }} name='vendor' label='Vendor' {...labelStyle} initialValue={data?.vendor}>
        <Input placeholder='Please enter vendor' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='isBetterSell'
        label='isBetterSell'
        {...labelStyle}
        initialValue={data?.isBetterSell}
      >
        <Switch />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='isNewArrival'
        label='isNewArrival'
        {...labelStyle}
        initialValue={data?.isNewArrival}
      >
        <Switch />
      </Form.Item>
    </>
  );
}

export default FormInput;
