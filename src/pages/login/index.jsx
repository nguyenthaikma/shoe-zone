import React from "react";
import { useMutationLogin } from "../../queries/hooks";
import { Button } from "antd";

export default function Login() {
  const { mutate } = useMutationLogin();
  return (
    <div>
      <Button onClick={() => mutate({ email: "", password: "" })}>
        Click me
      </Button>
    </div>
  );
}
