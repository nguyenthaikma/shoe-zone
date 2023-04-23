import React from 'react';
import { useMutationLogin } from '../../queries/hooks';
import { Button } from 'antd';
import { setStoredAuth } from '@src/libs/localStorage';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { mutate } = useMutationLogin();
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => mutate({ email: '', password: '' })}>Click me</Button>{' '}
      <Button
        onClick={() => {
          setStoredAuth({ accessToken: 'hihi' });
          navigate('/');
        }}
      >
        Login
      </Button>
    </div>
  );
}
