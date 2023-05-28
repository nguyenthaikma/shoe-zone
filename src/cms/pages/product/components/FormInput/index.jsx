import { labelStyle } from '@src/configs/const';
import { regexPhoneNumber, regexPwdStrong, regexUsername } from '@src/utils/regex';
import { Form, Input } from 'antd';

function FormInput({ data }) {
  return (
    <>
      <Form.Item
        style={{ marginBottom: 24}}
        name='username'
        label='Username'
        {...labelStyle}
        initialValue={data?.username}
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
          {
            pattern: regexUsername,
            message: 'Username must not contain special characters, at least 3 characters and up to 30 characters!',
          },
        ]}
      >
        <Input placeholder='Please enter username' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24}}
        name='firstName'
        label='First name'
        {...labelStyle}
        initialValue={data?.firstName}
        rules={[
          {
            required: true,
            message: 'First name is required!',
          },
        ]}
      >
        <Input placeholder='Please enter first name' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24}}
        name='lastName'
        label='Last name'
        {...labelStyle}
        initialValue={data?.lastName}
        rules={[
          {
            required: true,
            message: 'Last name is required!',
          },
        ]}
      >
        <Input placeholder='Please enter last name' />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 24}}
        name='email'
        label='Email'
        {...labelStyle}
        initialValue={data?.email}
        rules={[
          {
            type: 'email',
            message: 'Email invalid!',
          },
          {
            required: true,
            message: 'Email is required!',
          },
        ]}
      >
        <Input placeholder='Please enter email' />
      </Form.Item>
      {!data && (
        <>
          <Form.Item
            style={{ marginBottom: 24}}
            name='password'
            label='Password'
            {...labelStyle}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Password is required!',
              },
              {
                pattern: regexPwdStrong,
                message:
                  'Password must be between 6 and 15 characters, in which there must be at least 1 special character, 1 number and 1 uppercase letter!',
              },
            ]}
          >
            <Input.Password placeholder='Please enter password' />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 24}}
            name='confirmPassword'
            label='Confirm password'
            {...labelStyle}
            hasFeedback
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder='Please enter confirm password' />
          </Form.Item>
        </>
      )}
      <Form.Item
        style={{ marginBottom: 24}}
        name='phone'
        label='Phone'
        {...labelStyle}
        initialValue={data?.phone}
        rules={[
          {
            max: 20,
            message: 'Phone cannot be longer than 20 characters',
          },
          { pattern: regexPhoneNumber, message: 'Phone number invalid' },
        ]}
      >
        <Input placeholder='Please enter phone' />
      </Form.Item>
    </>
  );
}

export default FormInput;
