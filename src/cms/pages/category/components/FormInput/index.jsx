import { labelStyle } from '@src/configs/const';
import { Form, Input } from 'antd';

function FormInput({ data }) {
  return (
    <>
      <Form.Item
        style={{ marginBottom: 24 }}
        name='name'
        label='Category name'
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
    </>
  );
}

export default FormInput;
